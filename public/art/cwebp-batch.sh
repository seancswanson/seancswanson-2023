for file in *
do
    if [[ $file == *.jpg ]] || [[ $file == *.png ]]; then
        cwebp -q 80 "$file" -o "${file%.*}.webp"
    fi
done