# !/bin/bash
originalfile=*;
mkdir -p ../thumbs;
for i in $originalfile'.png';
do
  z=${i%.png}
  # echo $z
echo "converting "$z".png";
convert -thumbnail 200 $i  "../thumbs/"$z"_thumbs.png"
done


for i in $originalfile'.jpg';
do
  z=${i%.jpg}
  echo "converting"$z".jpg";
convert -thumbnail 200 $i  "../thumbs/"$z"_thumbs.jpg"
done
