"use client";

import { useEffect, useState } from "react";

type Weather = {
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  location: {
    name: string;
    region: string;
  };
} | null;

export function WeatherSmall() {
  const [weather, setWeather] = useState<Weather>(null);
  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=1038e962e1df4278ac183212231209&q=London&aqi=no"
    )
      .then((res) => res.json())
      .then((weather) => setWeather(weather))
      .catch((err) => console.error("Error", err));
  });

  if (weather) {
    return (
      <span className="text-muted">
        Currently {weather.current.temp_c}, {weather.current.condition.text}
      </span>
    );
  } else {
    return <div></div>;
  }
}
