#!/usr/bin/env bash
# Compila los tres CVs (dos pasadas cada uno, por las capas de TikZ) y borra los auxiliares.
# Español e inglés con pdflatex; chino con xelatex para usar Noto Sans CJK SC.
set -euo pipefail
cd "$(dirname "$0")"

build() {
  local engine=$1 file=$2
  for _ in 1 2; do
    "$engine" -interaction=nonstopmode -halt-on-error "$file.tex" > /dev/null \
      || { tail -n 30 "$file.log"; exit 1; }
  done
  rm -f "$file.aux" "$file.log" "$file.out"
  echo "ok  $file.pdf"
}

build pdflatex cv_esteban_santiago_torres
build pdflatex cv_esteban_santiago_torres_en
build xelatex  cv_esteban_santiago_torres_zh
