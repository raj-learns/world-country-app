-- CreateTable
CREATE TABLE "Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "area" REAL NOT NULL,
    "population" INTEGER NOT NULL,
    "continent" TEXT NOT NULL
);
