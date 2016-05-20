# !/bin/bash

# Using imagemagick's convert -thumbnail script, we're creating thumbnails for
# all images in the folder and placing them in a directory one step above called thumbs

originalfile=*;
mkdir -p ../thumbs;
for i in $originalfile'.png';
do
  z=${i%.png}
  # echo $z
echo "converting "$z".png";
convert -thumbnail 200 $i  "../thumbs/"$z"_thumb.png"
done


for i in $originalfile'.jpg';
do
  z=${i%.jpg}
  echo "converting "$z".jpg";
convert -thumbnail 200 $i  "../thumbs/"$z"_thumb.jpg"
done
