interface LocationBounds {
  minLat: number;
  maxLat: number;
  minLng: number;
  maxLng: number;
}

interface LocationMapping {
  bounds: LocationBounds;
  district: string;
  ds_division: string;
}

interface LocationResult {
  district: string;
  ds_division: string;
}

interface GeolocationError {
  code: number;
  message: string;
}

// Comprehensive coordinate mapping for Sri Lankan districts and divisional secretariats
const LOCATION_MAPPINGS: LocationMapping[] = [
  // Western Province
  { bounds: { minLat: 6.7, maxLat: 7.0, minLng: 79.8, maxLng: 80.2 }, district: "Colombo", ds_division: "Colombo" },
  { bounds: { minLat: 6.85, maxLat: 7.15, minLng: 79.85, maxLng: 80.15 }, district: "Colombo", ds_division: "Dehiwala-Mount Lavinia" },
  { bounds: { minLat: 6.9, maxLat: 7.2, minLng: 79.9, maxLng: 80.3 }, district: "Gampaha", ds_division: "Gampaha" },
  { bounds: { minLat: 7.0, maxLat: 7.3, minLng: 79.95, maxLng: 80.25 }, district: "Gampaha", ds_division: "Negombo" },
  { bounds: { minLat: 6.5, maxLat: 6.8, minLng: 79.8, maxLng: 80.2 }, district: "Kalutara", ds_division: "Kalutara" },
  { bounds: { minLat: 6.45, maxLat: 6.75, minLng: 79.95, maxLng: 80.25 }, district: "Kalutara", ds_division: "Beruwala" },

  // Central Province
  { bounds: { minLat: 7.2, maxLat: 7.4, minLng: 80.5, maxLng: 80.8 }, district: "Kandy", ds_division: "Kandy" },
  { bounds: { minLat: 7.25, maxLat: 7.35, minLng: 80.55, maxLng: 80.75 }, district: "Kandy", ds_division: "Gampola" },
  { bounds: { minLat: 7.4, maxLat: 7.6, minLng: 80.5, maxLng: 80.8 }, district: "Matale", ds_division: "Matale" },
  { bounds: { minLat: 7.45, maxLat: 7.65, minLng: 80.6, maxLng: 80.9 }, district: "Matale", ds_division: "Dambulla" },
  { bounds: { minLat: 6.9, maxLat: 7.1, minLng: 80.7, maxLng: 81.0 }, district: "Nuwara Eliya", ds_division: "Nuwara Eliya" },
  { bounds: { minLat: 6.95, maxLat: 7.15, minLng: 80.75, maxLng: 80.95 }, district: "Nuwara Eliya", ds_division: "Hatton" },

  // Southern Province
  { bounds: { minLat: 6.0, maxLat: 6.3, minLng: 80.1, maxLng: 80.4 }, district: "Galle", ds_division: "Galle" },
  { bounds: { minLat: 6.1, maxLat: 6.2, minLng: 80.05, maxLng: 80.15 }, district: "Galle", ds_division: "Ambalangoda" },
  { bounds: { minLat: 5.9, maxLat: 6.2, minLng: 80.5, maxLng: 80.8 }, district: "Matara", ds_division: "Matara" },
  { bounds: { minLat: 5.95, maxLat: 6.05, minLng: 80.4, maxLng: 80.5 }, district: "Matara", ds_division: "Weligama" },
  { bounds: { minLat: 6.1, maxLat: 6.4, minLng: 81.0, maxLng: 81.3 }, district: "Hambantota", ds_division: "Hambantota" },
  { bounds: { minLat: 6.2, maxLat: 6.3, minLng: 81.0, maxLng: 81.1 }, district: "Hambantota", ds_division: "Tangalle" },

  // Northern Province
  { bounds: { minLat: 9.5, maxLat: 9.8, minLng: 80.0, maxLng: 80.3 }, district: "Jaffna", ds_division: "Jaffna" },
  { bounds: { minLat: 9.8, maxLat: 9.9, minLng: 80.2, maxLng: 80.3 }, district: "Jaffna", ds_division: "Point Pedro" },
  { bounds: { minLat: 9.3, maxLat: 9.6, minLng: 80.3, maxLng: 80.6 }, district: "Kilinochchi", ds_division: "Kilinochchi" },
  { bounds: { minLat: 9.1, maxLat: 9.4, minLng: 80.4, maxLng: 80.7 }, district: "Kilinochchi", ds_division: "Pachchilaipalli" },
  { bounds: { minLat: 8.9, maxLat: 9.2, minLng: 79.9, maxLng: 80.2 }, district: "Mannar", ds_division: "Mannar" },
  { bounds: { minLat: 9.0, maxLat: 9.1, minLng: 79.8, maxLng: 79.9 }, district: "Mannar", ds_division: "Madhu" },
  { bounds: { minLat: 8.7, maxLat: 9.0, minLng: 80.4, maxLng: 80.7 }, district: "Vavuniya", ds_division: "Vavuniya" },
  { bounds: { minLat: 8.8, maxLat: 9.1, minLng: 80.5, maxLng: 80.8 }, district: "Vavuniya", ds_division: "Vavuniya South" },
  { bounds: { minLat: 9.0, maxLat: 9.3, minLng: 80.7, maxLng: 81.0 }, district: "Mullaitivu", ds_division: "Mullaitivu" },
  { bounds: { minLat: 9.2, maxLat: 9.5, minLng: 80.8, maxLng: 81.1 }, district: "Mullaitivu", ds_division: "Puthukudiyiruppu" },

  // Eastern Province
  { bounds: { minLat: 7.7, maxLat: 8.0, minLng: 81.6, maxLng: 81.9 }, district: "Batticaloa",ds_division: "Batticaloa" },
  { bounds: { minLat: 7.6, maxLat: 7.9, minLng: 81.65, maxLng: 81.85 }, district: "Batticaloa", ds_division: "Eravur Town" },
  { bounds: { minLat: 7.2, maxLat: 7.5, minLng: 81.6, maxLng: 81.9 }, district: "Ampara", ds_division: "Ampara" },
  { bounds: { minLat: 7.1, maxLat: 7.4, minLng: 81.7, maxLng: 82.0 }, district: "Ampara", ds_division: "Kalmunai" },
  { bounds: { minLat: 8.5, maxLat: 8.8, minLng: 81.1, maxLng: 81.4 }, district: "Trincomalee", ds_division: "Trincomalee" },
  { bounds: { minLat: 8.4, maxLat: 8.7, minLng: 81.2, maxLng: 81.5 }, district: "Trincomalee", ds_division: "Kinniya" },

  // North Western Province
  { bounds: { minLat: 7.4, maxLat: 7.7, minLng: 80.3, maxLng: 80.6 }, district: "Kurunegala", ds_division: "Kurunegala" },
  { bounds: { minLat: 7.45, maxLat: 7.55, minLng: 80.0, maxLng: 80.3 }, district: "Kurunegala", ds_division: "Kuliyapitiya" },
  { bounds: { minLat: 8.0, maxLat: 8.3, minLng: 79.8, maxLng: 80.1 }, district: "Puttalam", ds_division: "Puttalam" },
  { bounds: { minLat: 7.5, maxLat: 7.8, minLng: 79.8, maxLng: 80.1 }, district: "Puttalam", ds_division: "Chilaw" },

  // North Central Province
  { bounds: { minLat: 8.3, maxLat: 8.6, minLng: 80.3, maxLng: 80.6 }, district: "Anuradhapura", ds_division: "Anuradhapura East" },
  { bounds: { minLat: 8.0, maxLat: 8.3, minLng: 80.6, maxLng: 80.9 }, district: "Anuradhapura", ds_division: "Kekirawa" },
  { bounds: { minLat: 7.9, maxLat: 8.2, minLng: 80.9, maxLng: 81.2 }, district: "Polonnaruwa", ds_division: "Polonnaruwa" },
  { bounds: { minLat: 8.1, maxLat: 8.4, minLng: 81.0, maxLng: 81.3 }, district: "Polonnaruwa", ds_division: "Medirigiriya" },

  // Uva Province
  { bounds: { minLat: 6.9, maxLat: 7.2, minLng: 81.0, maxLng: 81.3 }, district: "Badulla", ds_division: "Badulla" },
  { bounds: { minLat: 6.95, maxLat: 7.05, minLng: 80.95, maxLng: 81.05 }, district: "Badulla", ds_division: "Bandarawela" },
  { bounds: { minLat: 6.8, maxLat: 7.1, minLng: 81.3, maxLng: 81.6 }, district: "Monaragala", ds_division: "Monaragala" },
  { bounds: { minLat: 6.85, maxLat: 7.05, minLng: 81.0, maxLng: 81.3 }, district: "Monaragala", ds_division: "Wellawaya" },

  // Sabaragamuwa Province
  { bounds: { minLat: 6.6, maxLat: 6.9, minLng: 80.3, maxLng: 80.6 }, district: "Ratnapura", ds_division: "Ratnapura" },
  { bounds: { minLat: 6.6, maxLat: 6.8, minLng: 80.6, maxLng: 80.9 }, district: "Ratnapura", ds_division: "Balangoda" },
  { bounds: { minLat: 7.2, maxLat: 7.5, minLng: 80.3, maxLng: 80.6 }, district: "Kegalle", ds_division: "Kegalle" },
  { bounds: { minLat: 7.25, maxLat: 7.35, minLng: 80.4, maxLng: 80.5 }, district: "Kegalle", ds_division: "Mawanella" }
];

/**
 * Maps GPS coordinates to the corresponding district and divisional secretariat
 * @param latitude - Latitude coordinate
 * @param longitude - Longitude coordinate
 * @returns Object containing district and divisionalSecretariat
 */
export const getLocationFromCoordinates = (latitude: number, longitude: number): LocationResult => {
  // Find the first matching location mapping
  for (const mapping of LOCATION_MAPPINGS) {
    const { bounds, district, ds_division } = mapping;
    if (
      latitude >= bounds.minLat &&
      latitude <= bounds.maxLat &&
      longitude >= bounds.minLng &&
      longitude <= bounds.maxLng
    ) {
      return { district, ds_division };
    }
  }

  // Default fallback if no mapping found (Colombo center)
  return { district: "Colombo", ds_division: "Colombo" };
};

/**
 * Gets the current GPS location and returns the corresponding district and divisional secretariat
 * @returns Promise that resolves to LocationResult or rejects with error
 */
export const getCurrentLocation = (): Promise<LocationResult> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by this browser"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const location = getLocationFromCoordinates(latitude, longitude);
        resolve(location);
      },
      (error) => {
        let errorMessage = "Unable to retrieve location";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied by user";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information unavailable";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out";
            break;
        }
        reject(new Error(errorMessage));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 600000 // 10 minutes
      }
    );
  });
};

/**
 * Utility function to check if GPS is available
 * @returns boolean indicating GPS availability
 */
export const isGeolocationAvailable = (): boolean => {
  return 'geolocation' in navigator;
};

export default {
  getLocationFromCoordinates,
  getCurrentLocation,
  isGeolocationAvailable
};