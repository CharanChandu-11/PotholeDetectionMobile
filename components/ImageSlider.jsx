import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";

const images = [
  require("../assets/images/h1.png"),
  require("../assets/images/h2.png"),
  require("../assets/images/h3.png"),
  require("../assets/images/h4.png"),
  require("../assets/images/h5.png"),
  require("../assets/images/h6.png"),
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <View className="w-full h-64 items-center justify-center">
      <Image
        source={images[index]}
        className="w-full h-full rounded-xl"
        resizeMode="cover"
      />
    </View>
  );
}
