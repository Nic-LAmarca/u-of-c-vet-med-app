DROP DATABASE ENSF607PROJECT;
CREATE DATABASE IF NOT EXISTS ENSF607PROJECT;
USE ENSF607PROJECT;
CREATE TABLE IF NOT EXISTS ANIMAL
	(animalId			int 			NOT NULL auto_increment,
	 animalName			VARCHAR(30)		NOT NULL,
	 species			VARCHAR(30)		NOT NULL,
     weight				double			NOT NULL,
     tattooNum			int				NOT NULL,
     cityTattoo			VARCHAR(30) 	NOT NULL,
     birthDate			datetime		NOT NULL,
     breed				VARCHAR(30)		NOT NULL,
     sex				VARCHAR(6)		NOT NULL,
     rfid				long			NOT NULL,
     microchip			long			NOT NULL,
     statusType			VARCHAR(30)		NOT NULL,
     available			boolean			NOT NULL,
     purpose			VARCHAR(30),
     region				VARCHAR(30),
     subspecies			VARCHAR(30),
     color				VARCHAR(30),
	 distinguishingFeatures 	VARCHAR(30),
     PRIMARY KEY (animalId));
	
CREATE TABLE IF NOT EXISTS USER
	(userId					int				NOT NULL auto_increment,
     fName					VARCHAR(30) 	NOT NULL,
     lName					VARCHAR(30)		NOT NULL,
     email					VARCHAR(30)		NOT NULL,
     activationDate			datetime		NOT NULL,
     userType				VARCHAR(30)		NOT NULL,
     primary key(userId));
     
CREATE TABLE IF NOT EXISTS TREATMENT_METHOD
	(treatmentId		int				NOT NULL auto_increment,
     treatmentType		VARCHAR(30)		NOT NULL,
     primary key (treatmentId));

CREATE TABLE IF NOT EXISTS MEDICAL_RECORD_TYPE
	(medicalRecordId			int				NOT NULL auto_increment,
     medicalRecordType			VARCHAR(30)		NOT NULL,
     primary key (medicalRecordId));
 
CREATE TABLE IF NOT EXISTS COMMENT
	(commentId			int				NOT NULL auto_increment,
     userId				int				NOT NULL,
     animalId			int				NOT NULL,
     description		VARCHAR(100) 	NOT NULL,
     date				datetime		NOT NULL,
     primary key(commentId),
     foreign key(userId) references USER(userId),
     foreign key(animalId) references ANIMAL(animalId));
    
CREATE TABLE IF NOT EXISTS PRESCRIPTION_HISTORY
	(prescriptionId		int				NOT NULL auto_increment,
     userId				int				NOT NULL,
     animalId			int				NOT NULL,
     date				datetime		NOT NULL,
     drugName			VARCHAR(30)		NOT NULL,
     instructions		VARCHAR(100)	NOT NULL,
     dosage				double			NOT NULL,
     deliveryMethod		VARCHAR(50)		NOT NULL,
     primary key(prescriptionId),
     foreign key(userId) references USER(userId),
     foreign key(animalId) references ANIMAL(animalId));
     
CREATE TABLE IF NOT EXISTS IMAGE
	(imageId			int				NOT NULL auto_increment,
     userId				int				NOT NULL,
     creationDate		datetime		NOT NULL,
     file				VARCHAR(100)	NOT NULL,
     animalId			int				NOT NULL,
     type				VARCHAR(30)		NOT NULL,
     primary key(imageId),
     foreign key(userId) references USER(userId),
     foreign key(animalId) references ANIMAL(animalId));
 
CREATE TABLE IF NOT EXISTS STATUS
	(statusId			int				NOT NULL auto_increment,
     animalId			int				NOT NULL,
	 date				datetime		NOT NULL,
     description		VARCHAR(50),
     locations			VARCHAR(50)		NOT NULL,
     statusType			VARCHAR(20)		NOT NULL,
     imageId			int				NOT NULL,
     primary key(statusId),
     foreign key(animalId) references ANIMAL(animalId),
     foreign key(imageId) references IMAGE(imageId));

CREATE TABLE IF NOT EXISTS HISTORY
	(historyId			int				NOT NULL auto_increment,
	 date				date			NOT NULL,
     animalId			int				NOT NULL,
	 measurement		VARCHAR(30)		NOT NULL,
     value				double,
     userId				int				NOT NULL,
    primary key(historyId),
    foreign key(animalId) references ANIMAL(animalId),
    foreign key(userId) references USER(userId));
 
CREATE TABLE IF NOT EXISTS MEDICAL_RECORD_HISTORY
	(medicalRecordId	int				NOT NULL auto_increment,
     animalId			int				NOT NULL,
     date				date			NOT NULL,
     primary key(medicalRecordId),
     foreign key(animalId) references ANIMAL(animalId));
   
CREATE TABLE IF NOT EXISTS TREATMENT_HISTORY
	(treatmentId		int				NOT NULL auto_increment,
     animalId			int				NOT NULL,
     date				datetime		NOT NULL,
     primary key(treatmentId));
     
CREATE TABLE IF NOT EXISTS REQUEST
	(requestId			int				NOT NULL auto_increment,
     animalId			int				NOT NULL,
     userId				int				NOT NULL,
     newStatus			boolean			NOT NULL,
     adminApproved		boolean			NOT NULL,
     technicianApproved	boolean			NOT NULL,
     requestComplete	boolean			NOT NULL,
     requestSuccessful	boolean			NOT NULL,
     primary key(requestId),
     foreign key(animalId) references ANIMAL(animalId),
     foreign key(userId) references USER(userId));
     
     
INSERT INTO ANIMAL (animalId, animalName, species, weight, tattooNum, cityTattoo, birthDate, breed, sex, rfid, microchip, statusType, available, purpose, region, subspecies, color, distinguishingFeatures)
VALUES (1,				"Sparky",				"Dog",				3.6,				234234,				"HOC London",				"2018-08-15 00:00:00",				"Beagle",				"MN",				197839178371,				176387613813,				"Available",				true,				null,				null,				null,				"Brown, Black, White",				"Baying bark"),
		(2,				"Seabrease",			"Horse",			68,					564543,				"ABC Paris",				"2018-08-31 00:00:00",				"Quarter Horse",		"FM",				8987498179390,				5671876189197,				"Injured",					true,				null,				null,				null,				"Bay",								"Stocky, compact"),
        (3,				"Lily",					"Cow",				127,				981733,				"CBH India",				"2018-02-28 00:00:00",				"Abigar",				"MN",				83612863189,				812381931998,				"Sick",						true,				"Dairy",				"Spain",			"Taurus",			null,								null);

INSERT INTO USER (userId, fName, lName, email, activationDate, userType)
VALUES (1,				"user",				"1",				"admin@ucalgary.ca",				"2021-03-04 00:00:00",				"admin"),		
		(2,				"user",				"2",				"a.technician@ucalgary.ca",			"2021-03-04 00:00:00",				"animal technician"),	
        (3,				"user",				"3",				"teacher@ucalgary.ca",				"2021-04-05 00:00:00",				"teacher"),	
        (4,				"user",				"4",				"student1@ucalgary.ca",				"2021-03-19 00:00:00",				"student");

INSERT INTO TREATMENT_METHOD (treatmentId, treatmentType)
VALUES (1,	"Physical Exam"),
		(2,	"Blood Work"),
        (3,	"Bordetella Vaccine"),
        (4,	"Dental Cleaning"),
        (5,	"Deworming"),
        (6,	"Rabies Vaccinations"),
        (7,	"Chemo Treatment");

INSERT INTO TREATMENT_HISTORY (treatmentId, animalId, date)
VALUES (1,				1,				"2021-03-04 00:00:00"),
		(2,				1,				"2021-05-10 00:00:00"),
        (3,				2,				"2021-03-16 00:00:00"),
        (4,				3,				"2021-01-01 00:00:00"),
        (5,				3,				"2021-08-12 00:00:00");
        
INSERT INTO MEDICAL_RECORD_TYPE (medicalRecordId, medicalRecordType)
VALUES (1,	"XRAY"),
		(2,	"DICOm"),
        (3,	"SOAP"),
        (4,	"FORM"),
        (5,	"IMAGE"),
        (6,	"NOTE"),
        (8,	"LAB"),
        (9,	"LINK"),
        (10, "RECHECKS"),
        (11, "DX"),
        (12, "SURGERY"),
        (13, "TRANSFERS"),
        (14, "STUDENT SOAP"),
        (15, "PROB"),
        (16, "INVOICE"),
        (17, "PRODUCT NOTE");

INSERT INTO MEDICAL_RECORD_HISTORY (medicalRecordId, animalId, date)
VALUES (1,				1,				"2021-04-04 00:00:00"),
		(2,				1,				"2021-06-10 00:00:00"),
        (3,				2,				"2021-04-16 00:00:00"),
        (4,				3,				"2021-02-01 00:00:00"),
        (5,				3,				"2021-09-12 00:00:00");
        
INSERT INTO COMMENT (commentId, userId, animalId, description, date)
VALUES (1,             1,                1,                "Animal presents as ill.",                "2020-10-17 00:00:00"),
    (2,                1,                2,                "Evident injury.",                "2021-10-15 00:00:00"),
    (3,                2,                3,                "Animal presents with pain.",                "2021-11-26 00:00:00");
    
INSERT INTO PRESCRIPTION_HISTORY (prescriptionId, userId, animalId, date, drugName, instructions, dosage, deliveryMethod)
VALUES (1,                3,                1,                "2020-11-17 00:00:00",                "Advil",                "Take 2 every 4 hours.",                100,                "Oral"),
        (2,                3,                2,                "2021-12-01 00:00:00",                "Tylenol",                "Take 2 every 4 hours.",                100,                "Oral"),
        (3,                3,                3,                "2020-10-12 00:00:00",                "Tums",                "Take 1 every 2 hours.",                10,                "Chew");
        
INSERT INTO IMAGE (imageId, userId, creationDate, file, type, animalId)
VALUES (1,				1,				"2021-03-08 00:00:00",					"image1.png",					"profile",				1),
		(2,				4,				"2021-03-09 00:00:00",					"image2.png",					"injury",				2),
        (3,				4,				"2021-03-10 00:00:00",					"image3.png",					"Treatment",			1),
        (4,				3,				"2021-03-11 00:00:00",					"image4.png",					"injury",				1);
        
INSERT INTO STATUS (statusId, imageId, date, description, locations, statusType, animalId)
VALUES (1,				1,				"2021-12-12 00:00:00",					null,					"On Campus",				"Available",				1),
		(2,				2,				"2021-11-01 00:00:00",					"Her foot is injured",	"Hospital",					"Injured",					2);
	
INSERT INTO HISTORY (historyId, userId, measurement, value, date, animalId)
VALUES (1,				2,				"Weight",				null,				"2019-04-23 00:00:00",				1),
		(2,				3,				"Blood Concentration",	null,				"2019-04-26 00:00:00",				1),
        (3,				2,				"Heart Beat",			null,				"2018-11-21 00:00:00",				1),
        (4,				3,				"Temperature",			null,				"2019-04-23 00:00:00",				1),
        (5,				2,				"Dental Status",		null,				"2019-04-24 00:00:00",				1);
        
INSERT INTO REQUEST (animalId, userId, newStatus, adminApproved, technicianApproved, requestComplete, requestSuccessful)
VALUES (1,				1,				true,				false,				false,				false,				false),
		(2,				1,				true,				false,				false,				false,				false);
