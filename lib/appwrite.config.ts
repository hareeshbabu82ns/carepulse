import * as sdk from "node-appwrite";

export const {
  NEXT_APPWRITE_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);

export enum AppwriteInitDBFieldType {
  STRING = "string",
  INTEGER = "integer",
  FLOAT = "float",
  BOOLEAN = "boolean",
  DATETIME = "datetime",
  EMAIL = "email",
  URL = "url",
  ENUM = "enum",
  RELATION = "relation",
  IP = "ip",
}

export const permissionsAllAny: string[] = [
  'read("any")',
  'write("any")',
  'delete("any")',
  'update("any")',
];

export const DB_INIT = {
  db: {
    id: DATABASE_ID!,
    name: "CarePulse",
  },
  collections: [
    {
      id: PATIENT_COLLECTION_ID!,
      name: "Patients",
      permissions: permissionsAllAny,
      fields: [
        {
          key: "userId",
          type: AppwriteInitDBFieldType.STRING,
          required: true,
          default: "",
        },
        {
          key: "name",
          type: AppwriteInitDBFieldType.STRING,
          required: true,
          size: 250,
        },
        {
          key: "birthDate",
          type: AppwriteInitDBFieldType.DATETIME,
          required: true,
        },
        {
          key: "gender",
          type: AppwriteInitDBFieldType.ENUM,
          elements: ["Male", "Female", "Other"],
          default: "Other",
        },
        {
          key: "privacyConsent",
          type: AppwriteInitDBFieldType.BOOLEAN,
        },
        {
          key: "testInt",
          type: AppwriteInitDBFieldType.INTEGER,
        },
        {
          key: "testFloat",
          type: AppwriteInitDBFieldType.FLOAT,
          min: 0.1,
          max: 0.9,
          default: "0.5",
        },
      ],
    },
    {
      id: APPOINTMENT_COLLECTION_ID!,
      name: "Appointments",
      permissions: permissionsAllAny,
      fields: [],
    },
    {
      id: DOCTOR_COLLECTION_ID!,
      name: "Doctors",
      permissions: permissionsAllAny,
      fields: [],
    },
  ],
};
