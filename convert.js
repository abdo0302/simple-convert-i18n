const Converter = {
    length: {
      kmToMiles: (km) => km * 0.621371,
      milesToKm: (miles) => miles * 1.60934,
  
      kmToMeters: (km) => km * 1000,
      metersToKm: (meters) => meters / 1000,
  
      metersToFeet: (meters) => meters * 3.28084,
      feetToMeters: (feet) => feet * 0.3048,
  
      centimetersToInches: (cm) => cm * 0.393701,
      inchesToCentimeters: (inches) => inches * 2.54,
  
      millimetersToInches: (mm) => mm * 0.0393701,
      inchesToMillimeters: (inches) => inches * 25.4,
  
      yardsToMeters: (yards) => yards * 0.9144,
      metersToYards: (meters) => meters * 1.09361,
  
      nauticalMilesToKm: (nauticalMiles) => nauticalMiles * 1.852,
      kmToNauticalMiles: (km) => km / 1.852,
    },
  

    weight: {
      kgToPounds: (kg) => kg * 2.20462,
      poundsToKg: (pounds) => pounds * 0.453592,
  
      gramsToKg: (grams) => grams / 1000,
      kgToGrams: (kg) => kg * 1000,
  
      ouncesToGrams: (ounces) => ounces * 28.3495,
      gramsToOunces: (grams) => grams / 28.3495,
  
      poundsToOunces: (pounds) => pounds * 16,
      ouncesToPounds: (ounces) => ounces / 16,
    },
  
    temperature: {
      celsiusToFahrenheit: (celsius) => (celsius * 9/5) + 32,
      fahrenheitToCelsius: (fahrenheit) => (fahrenheit - 32) * 5/9,
  
      kelvinToCelsius: (kelvin) => kelvin - 273.15,
      celsiusToKelvin: (celsius) => celsius + 273.15,
    },
  

    speed: {
      kmhToMph: (kmh) => kmh * 0.621371,
      mphToKmh: (mph) => mph * 1.60934,

      mpsToKmh: (mps) => mps * 3.6,
      kmhToMps: (kmh) => kmh / 3.6,
  
      knotsToKmh: (knots) => knots * 1.852,
      kmhToKnots: (kmh) => kmh / 1.852,
    },
  

    volume: {
      litersToGallons: (liters) => liters * 0.264172,
      gallonsToLiters: (gallons) => gallons * 3.78541,
  
      millilitersToFluidOunces: (ml) => ml * 0.033814,
      fluidOuncesToMilliliters: (flOz) => flOz * 29.5735,
    },
  

    area: {
      squareMetersToSquareFeet: (sqm) => sqm * 10.7639,
      squareFeetToSquareMeters: (sqft) => sqft * 0.092903,
  
      hectaresToAcres: (hectares) => hectares * 2.47105,
      acresToHectares: (acres) => acres * 0.404686,
    },
  };
  
  module.exports = Converter;
  