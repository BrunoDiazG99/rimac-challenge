export const calculateAge = (birthday: string): number => {
  const [day, month, year] = birthday.split("-").map(Number);
  const birthDate = new Date(year, month - 1, day); // month is 0-indexed
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // If birthday hasn't occurred this year yet, subtract 1
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};
