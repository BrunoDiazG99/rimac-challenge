export interface AllowedUser {
  docType: "DNI" | "RUC";
  docNumber: string;
  phoneNumber: string;
}

// Hard-coded table of allowed users for demo purposes
export const allowedUsers: AllowedUser[] = [
  {
    docType: "DNI",
    docNumber: "30216147",
    phoneNumber: "5130216147",
  },
  {
    docType: "DNI",
    docNumber: "12345678",
    phoneNumber: "987654321",
  },
  {
    docType: "DNI",
    docNumber: "87654321",
    phoneNumber: "123456789",
  },
  {
    docType: "RUC",
    docNumber: "12345678901",
    phoneNumber: "987654321",
  },
  {
    docType: "RUC",
    docNumber: "10987654321",
    phoneNumber: "555123456",
  },
];

export const validateUser = (
  docType: string,
  docNumber: string,
  phoneNumber: string
): boolean => {
  return allowedUsers.some(
    (user) =>
      user.docType === docType &&
      user.docNumber === docNumber &&
      user.phoneNumber === phoneNumber
  );
};
