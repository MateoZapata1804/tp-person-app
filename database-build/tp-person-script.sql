IF OBJECT_ID('dbo.Person', 'U') IS NOT NULL
    DROP TABLE dbo.Person;

IF OBJECT_ID('dbo.DocumentType', 'U') IS NOT NULL
    DROP TABLE dbo.DocumentType;

IF OBJECT_ID('dbo.Blacklist', 'U') IS NOT NULL
    DROP TABLE dbo.Blacklist;

/* Crear tabla para tipos de documento */
CREATE TABLE dbo.DocumentType (
    Id VARCHAR(5) NOT NULL PRIMARY KEY,
    Description VARCHAR(100) NOT NULL
);

/* Poblar tipos de documento */
INSERT INTO dbo.DocumentType (Id, Description) VALUES
('CC', 'Cédula de ciudadanía'),
('CE', 'Cédula de extranjería'),
('TI', 'Tarjeta de identidad'),
('RC', 'Registro civil'),
('PA', 'Pasaporte'),
('NIT', 'Número de identificación tributaria'),
('PEP', 'Permiso especial de permanencia'),
('PPT', 'Permiso por protección temporal');


/* Crear tabla de Personas */
CREATE TABLE dbo.Person (
    Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    IdType VARCHAR(5) NOT NULL,
    IdNumber BIGINT NOT NULL,
    CompanyName VARCHAR(150) NULL,
    FirstName VARCHAR(100) NULL,
    SecondName VARCHAR(100) NULL,
    FirstLastName VARCHAR(100) NULL,
    SecondLastName VARCHAR(100) NULL,
    Email VARCHAR(150) NOT NULL,
    AuthorizeCellPhoneMessages BIT NOT NULL DEFAULT 0,
    AuthorizeEmailMessages BIT NOT NULL DEFAULT 0,

    CONSTRAINT FK_Person_DocumentType
        FOREIGN KEY (IdType)
        REFERENCES dbo.DocumentType(Id),
    CONSTRAINT UQ_Person_Id UNIQUE (IdType, IdNumber),
);

CREATE TABLE dbo.PersonBlacklist (
  Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  IdType VARCHAR(5) NOT NULL,
  IdNumber BIGINT NOT NULL,
  Reason VARCHAR(255) NOT NULL,

  CONSTRAINT UQ_Person_Blacklist_Id UNIQUE (IdType, IdNumber),
)
INSERT INTO PersonBlacklist (IdType, IdNumber, Reason) VALUES
('NIT', 900674335, 'No se permite el registro a esta empresa en el sistema');