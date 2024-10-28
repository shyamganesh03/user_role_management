import api from ".";

export const fetchUserData = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
