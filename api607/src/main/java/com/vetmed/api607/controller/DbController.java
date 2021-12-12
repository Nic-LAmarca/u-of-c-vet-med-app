package com.vetmed.api607.controller;

import com.vetmed.api607.model.*;

import javax.websocket.server.PathParam;
import java.io.FileReader;
import java.sql.*;
import java.util.ArrayList;
import java.util.Properties;
import java.sql.Date;

public class DbController {
    private static DbController instanceVar;
    private Connection dbConnect;
    private Properties dbDetails;
    private ResultSet results;

    public DbController(){
        try{
            String dbDetailsLocation = "src/main/resources/application.properties";
            this.dbDetails = new Properties();
            this.dbDetails.load(new FileReader(dbDetailsLocation));
            String connectionString = String.format("jdbc:mysql://%s:%s/%s", this.dbDetails.getProperty("db.host"), this.dbDetails.getProperty("db.port"), this.dbDetails.getProperty("db.schema"));
            this.dbConnect = DriverManager.getConnection(connectionString, this.dbDetails.getProperty("db.user"), this.dbDetails.getProperty("db.password"));
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    // ********************************************************
    // ****** SECTION USED FOR ANIMAL QUERY INTERACTIONS ******
    // ********************************************************

    /**
     *
     * Method is used to search the database for an Animal with the entered id and return the Animal object if found
     *
     * @param id is the unique id value to search with
     * @return a new Animal object that matches the id passed as an argument
     */
    public Animal searchForAnimal(int id) {
        Animal foundAnimal = new Animal();
        try {
            String query = "SELECT * FROM ANIMAL WHERE animalId = ?";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, id);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                if (results.getInt("animalId") == id) {
                    foundAnimal.setAnimalId(id);
                    foundAnimal.setAnimalName(results.getString("animalName"));
                    foundAnimal.setSpecies(results.getString("species"));
                    foundAnimal.setWeight(results.getDouble("weight"));
                    foundAnimal.setTattooNum(results.getInt("tattooNum"));
                    foundAnimal.setCityTattoo(results.getString("cityTattoo"));
                    foundAnimal.setBirthDate(results.getDate("birthDate").toString());
                    foundAnimal.setBreed(results.getString("breed"));
                    foundAnimal.setSex(results.getString("sex"));
                    foundAnimal.setRfid(results.getLong("rfid"));
                    foundAnimal.setMicrochip(results.getLong("microchip"));
                    foundAnimal.setStatusType(results.getString("statusType"));
                    foundAnimal.setAvailable(results.getBoolean("available"));
                    foundAnimal.setPurpose(results.getString("location"));
                    foundAnimal.setRegion(results.getString("alert"));
                    foundAnimal.setPurpose(results.getString("purpose"));
                    foundAnimal.setRegion(results.getString("region"));
                    foundAnimal.setSubspecies(results.getString("subspecies"));
                    foundAnimal.setColor(results.getString("color"));
                    foundAnimal.setDistinguishingFeatures(results.getString("distinguishingFeatures"));
                }
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return foundAnimal;
    }

    /**
     *
     * Method is used to return an arraylist of animals depending on the filtered parameters being passed
     *
     * @param animalName is the name of the animal to search for
     * @param animalSpecies is the name of the species to search for
     * @param animalBreed is the name of the breed to search for
     * @param animalStatus is the name of the status to search for
     * @return all animals in an arraylist that fit the filter requirements
     */
    public ArrayList<Animal> getFilteredAnimals(String animalName, String animalSpecies, String animalBreed, String animalStatus) {
        ArrayList<Animal> animalList = new ArrayList<Animal>();
        try {
            System.out.println("There");
            String query = "SELECT * FROM ANIMAL WHERE animalName = ?(@animalName IS NULL, animalName, @animalName) AND  animalSpecies = ?(@animalSpecies IS NULL, animalSpecies, @animalSpecies) AND animalBreed = ?(@animalBreed IS NULL, animalBreed, @animalBreed) AND animalStatus = ?(@animalStatus IS NULL, animalStatus, @animalStatus)";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setString(1, animalName);
            myStmt.setString(2, animalSpecies);
            myStmt.setString(3, animalBreed);
            myStmt.setString(4, animalStatus);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                Animal addAnimal = new Animal();
                addAnimal.setAnimalId(results.getInt("animalId"));
                addAnimal.setAnimalName(results.getString("animalName"));
                addAnimal.setSpecies(results.getString("species"));
                addAnimal.setWeight(results.getDouble("weight"));
                addAnimal.setTattooNum(results.getInt("tattooNum"));
                addAnimal.setCityTattoo(results.getString("cityTattoo"));
                addAnimal.setBirthDate(results.getDate("birthDate").toString());
                addAnimal.setBreed(results.getString("breed"));
                addAnimal.setSex(results.getString("sex"));
                addAnimal.setRfid(results.getLong("rfid"));
                addAnimal.setMicrochip(results.getLong("microchip"));
                addAnimal.setStatusType(results.getString("statusType"));
                addAnimal.setAvailable(results.getBoolean("available"));
                addAnimal.setPurpose(results.getString("location"));
                addAnimal.setRegion(results.getString("alert"));
                addAnimal.setPurpose(results.getString("purpose"));
                addAnimal.setRegion(results.getString("region"));
                addAnimal.setSubspecies(results.getString("subspecies"));
                addAnimal.setColor(results.getString("color"));
                addAnimal.setDistinguishingFeatures(results.getString("distinguishingFeatures"));
                animalList.add(addAnimal);
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return animalList;
    }

    /**
     *
     * Method is used to return an arraylist of Animals that are in the database
     *
     * @return a new list of Animal objects from the db
     */
    public ArrayList<Animal> getAllAnimals() {
        ArrayList<Animal> animalList = new ArrayList<Animal>();
        try {
            String query = "SELECT * FROM ANIMAL";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                Animal addAnimal = new Animal();
                addAnimal.setAnimalId(results.getInt("animalId"));
                addAnimal.setAnimalName(results.getString("animalName"));
                addAnimal.setSpecies(results.getString("species"));
                addAnimal.setWeight(results.getDouble("weight"));
                addAnimal.setTattooNum(results.getInt("tattooNum"));
                addAnimal.setCityTattoo(results.getString("cityTattoo"));
                addAnimal.setBirthDate(results.getDate("birthDate").toString());
                addAnimal.setBreed(results.getString("breed"));
                addAnimal.setSex(results.getString("sex"));
                addAnimal.setRfid(results.getLong("rfid"));
                addAnimal.setMicrochip(results.getLong("microchip"));
                addAnimal.setStatusType(results.getString("statusType"));
                addAnimal.setAvailable(results.getBoolean("available"));
                addAnimal.setPurpose(results.getString("location"));
                addAnimal.setRegion(results.getString("alert"));
                addAnimal.setPurpose(results.getString("purpose"));
                addAnimal.setRegion(results.getString("region"));
                addAnimal.setSubspecies(results.getString("subspecies"));
                addAnimal.setColor(results.getString("color"));
                addAnimal.setDistinguishingFeatures(results.getString("distinguishingFeatures"));
                animalList.add(addAnimal);
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return animalList;
    }


    /**
     *
     * Method is used to add an Animal into the database based on the entered credentials
     *
     * @param animalName is the name of the animal
     * @param species is the species of the animal
     * @param weight is the weight of the animal
     * @param tattooNum is the tattoo number of the animal
     * @param cityTattoo is the city tattoo of the animal
     * @param birthDate is the birthdate of the animal
     * @param breed is the breed of the animal
     * @param sex is the sex of the animal
     * @param rfid is the rfid of the animal
     * @param microchip is the microchip of the animal
     * @param statusType is the status of the animal
     * @param purpose is the purpose of the animal
     * @param region is the region of the animal
     * @param subspecies is the subspecies of the animal
     * @param color is the color of the animal
     * @param distinguishingFeatures are the distinguishing features of the animal
     */
    public void addAnimal(String animalName, String species, Double weight, int tattooNum, String cityTattoo, String birthDate, String breed,
                           String sex, long rfid, long microchip, String statusType, String location, String alert,  String purpose, String region, String subspecies, String color, String distinguishingFeatures) {
        try {
            String query = "INSERT INT0 ANIMAL (animalName, species, weight, tattooNum, cityTattoo, birthDate, breed, sex, rfid, microchip, statusType, available, location, alert, purpose, region, subspecies, color, distinguishingFeatures) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setString(1, animalName);
            myStmt.setString(2, species);
            myStmt.setDouble(3, weight);
            myStmt.setInt(4, tattooNum);
            myStmt.setString(5, cityTattoo);
            myStmt.setDate(6, Date.valueOf(birthDate));
            myStmt.setString(7, breed);
            myStmt.setString(8, sex);
            myStmt.setLong(9, rfid);
            myStmt.setLong(10, microchip);
            myStmt.setString(11, statusType);
            myStmt.setBoolean(12, true);
            myStmt.setString(13, location);
            myStmt.setString(14, alert);
            myStmt.setString(15, purpose);
            myStmt.setString(16, region);
            myStmt.setString(17, subspecies);
            myStmt.setString(18, color);
            myStmt.setString(19, distinguishingFeatures);
            myStmt.executeQuery();
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    // ********************************************************
    // ****** SECTION USED FOR ANIMAL QUERY INTERACTIONS ******
    // ********************************************************










    // *********************************************************
    // ****** SECTION USED FOR COMMENT QUERY INTERACTIONS ******
    // *********************************************************

    /**
     *
     * Method is used to search the database for an Comment with the entered id and return the Comment object if found
     *
     * @param id is the unique id value to search with
     * @return a new Comment object that matches the id passed as an argument
     */
    public Comment searchForComment(int id) {
        Comment foundComment = new Comment();
        try {
            String query = "SELECT * FROM COMMENT WHERE commentId = ?";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, id);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                if (results.getInt("commentId") == id) {
                    foundComment.setCommentId(id);
                    foundComment.setUserId(results.getInt("userId"));
                    foundComment.setAnimalId(results.getInt("animalId"));
                    foundComment.setDescription(results.getString("description"));
                    foundComment.setDate(results.getDate("date").toString());
                }
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return foundComment;
    }

    /**
     *
     * Method is used to return an arraylist of Comments that are in the database
     *
     * @return a new list of Comment objects from the db
     */
    public ArrayList<Comment> getAllComments() {
        ArrayList<Comment> commentList = new ArrayList<Comment>();
        try {
            String query = "SELECT * FROM COMMENT";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                Comment addComment= new Comment();
                addComment.setCommentId(results.getInt("commentId"));
                addComment.setUserId(results.getInt("userId"));
                addComment.setAnimalId(results.getInt("animalId"));
                addComment.setDescription(results.getString("description"));
                addComment.setDate(results.getDate("date").toString());
                commentList.add(addComment);
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return commentList;
    }

    /**
     *
     * Method is used to add a Comment into the database
     *
     * @param userId is the user entering the comment
     * @param animalId is the animal being commented on
     * @param description is the comment description
     * @param date is the date the comment was made
     */
    public void addComment(int userId, int animalId, String description, String date){
        try {
            String query = "INSERT INT0 COMMENT (userId, animalId, description, date) VALUES (?, ?, ?, ?)";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, userId);
            myStmt.setInt(2, animalId);
            myStmt.setString(3, description);
            myStmt.setDate(4, Date.valueOf(date));
            myStmt.executeQuery();
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // *********************************************************
    // ****** SECTION USED FOR COMMENT QUERY INTERACTIONS ******
    // *********************************************************










    // *********************************************************
    // ****** SECTION USED FOR HISTORY QUERY INTERACTIONS ******
    // *********************************************************

    /**
     *
     * Method is used to search the database for History with the entered id and return the History object if found
     *
     * @param id is the unique id value to search with
     * @return a new History object that matches the id passed as an argument
     */
    public History searchForHistory(int id) {
        History foundHistory = new History();
        try {
            String query = "SELECT * FROM HISTORY WHERE HistoryId = ?";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, id);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                if (results.getInt("historyId") == id) {
                    foundHistory.setHistoryId(id);
                    foundHistory.setDate(results.getDate("date").toString());
                    foundHistory.setAnimalId(results.getInt("animalId"));
                    foundHistory.setMeasurement(results.getString("measurement"));
                    foundHistory.setValue(results.getDouble("value"));
                    foundHistory.setUserId(results.getInt("userId"));
                }
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return foundHistory;
    }

    /**
     *
     * Method is used to return an arraylist of History that are in the database
     *
     * @return a new list of History objects from the db
     */
    public ArrayList<History> getAllHistorys() {
        ArrayList<History> historyList = new ArrayList<History>();
        try {
            String query = "SELECT * FROM HISTORY";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                History addHistory= new History();
                addHistory.setHistoryId(results.getInt("historyId"));
                addHistory.setDate(results.getDate("date").toString());
                addHistory.setAnimalId(results.getInt("animalId"));
                addHistory.setMeasurement(results.getString("measurement"));
                addHistory.setValue(results.getDouble("value"));
                addHistory.setUserId(results.getInt("userId"));
                historyList.add(addHistory);
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return historyList;
    }

    /**
     *
     * Method is used to add a History into the database
     *
     * @param date is the date the history is for
     * @param animalId is the animal being recorded
     * @param measurement is the measurement type
     * @param value is the result of the measurement
     * @param userId is the user entering the history
     */
    public void addHistory(String date, int animalId, String measurement, Double value, int userId){
        try {
            String query = "INSERT INT0 HISTORY (date, animalId, measurement, value, userId) VALUES (?, ?, ?, ?, ?)";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setDate(1, Date.valueOf(date));
            myStmt.setInt(2, animalId);
            myStmt.setString(3, measurement);
            myStmt.setDouble(4, value);
            myStmt.setInt(5, userId);
            myStmt.executeQuery();
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // *********************************************************
    // ****** SECTION USED FOR HISTORY QUERY INTERACTIONS ******
    // *********************************************************










    // *********************************************************
    // ****** SECTION USED FOR IMAGE QUERY INTERACTIONS ********
    // *********************************************************

    /**
     *
     * Method is used to search the database for Image with the entered id and return the Image object if found
     *
     * @param id is the unique id value to search with
     * @return a new Image object that matches the id passed as an argument
     */
    public Image searchForImage(int id) {
        Image foundImage= new Image();
        try {
            String query = "SELECT * FROM IMAGE WHERE ImageId = ?";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, id);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                if (results.getInt("imageId") == id) {
                    foundImage.setImageId(id);
                    foundImage.setUserId(results.getInt("userId"));
                    foundImage.setCreationDate(results.getDate("creationDate").toString());
                    foundImage.setFile(results.getString("file"));
                    foundImage.setAnimalId(results.getInt("animalId"));
                    foundImage.setType(results.getString("type"));
                }
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return foundImage;
    }

    /**
     *
     * Method is used to return an arraylist of Image that are in the database
     *
     * @return a new list of Image objects from the db
     */
    public ArrayList<Image> getAllImages() {
        ArrayList<Image> imageList = new ArrayList<Image>();
        try {
            String query = "SELECT * FROM IMAGE";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                Image addImage= new Image();
                addImage.setImageId(results.getInt("imageId"));
                addImage.setUserId(results.getInt("userId"));
                addImage.setCreationDate(results.getDate("creationDate").toString());
                addImage.setFile(results.getString("file"));
                addImage.setAnimalId(results.getInt("animalId"));
                addImage.setType(results.getString("type"));
                imageList.add(addImage);
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return imageList;
    }

    /**
     *
     * Method is used to add an image into the database
     *
     * @param userId is the user entering the image
     * @param creationDate is the date the image was taken
     * @param file is the file path for the image
     * @param animalId is the animal that the image relates to
     * @param type is the type of image being taken
     */
    public void addImage(int userId, String creationDate, String file, int animalId, String type){
        try {
            String query = "INSERT INT0 IMAGE (userId, creationDate, file, animalId, type) VALUES (?, ?, ?, ?, ?)";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, userId);
            myStmt.setDate(2, Date.valueOf(creationDate));
            myStmt.setString(3, file);
            myStmt.setInt(4, animalId);
            myStmt.setString(5, type);
            myStmt.executeQuery();
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // *********************************************************
    // ****** SECTION USED FOR IMAGE QUERY INTERACTIONS ********
    // *********************************************************










    // **************************************************************************
    // ****** SECTION USED FOR MEDICAL RECORD HISTORY QUERY INTERACTIONS ********
    // **************************************************************************

    /**
     *
     * Method is used to search the database for Medical Record History with the entered id and return the Medical Record History object if found
     *
     * @param id is the unique id value to search with
     * @return a new Medical Record History object that matches the id passed as an argument
     */
    public MedicalRecordHistory searchForMedicalRecordHistory(int id) {
        MedicalRecordHistory foundMedicalRecordHistory= new MedicalRecordHistory();
        try {
            String query = "SELECT * FROM MEDICAL_RECORD_HISTORY WHERE medicalRecordHistoryId = ?";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, id);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                if (results.getInt("medicalRecordHistoryId") == id) {
                    foundMedicalRecordHistory.setMedicalRecordId(id);
                    foundMedicalRecordHistory.setAnimalId(results.getInt("animalId"));
                    foundMedicalRecordHistory.setDate(results.getDate("date").toString());
                }
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return foundMedicalRecordHistory;
    }

    /**
     *
     * Method is used to return an arraylist of Medical Record History that are in the database
     *
     * @return a new list of Medical Record History objects from the db
     */
    public ArrayList<MedicalRecordHistory> getAllMedicalRecordHistory() {
        ArrayList<MedicalRecordHistory> medicalRecordHistoryList = new ArrayList<MedicalRecordHistory>();
        try {
            String query = "SELECT * FROM MEDICAL_RECORD_HISTORY";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                MedicalRecordHistory addMedicalRecordHistory= new MedicalRecordHistory();
                addMedicalRecordHistory.setMedicalRecordId(results.getInt("medicalRecordId"));
                addMedicalRecordHistory.setAnimalId(results.getInt("animalId"));
                addMedicalRecordHistory.setDate(results.getDate("date").toString());
                medicalRecordHistoryList.add(addMedicalRecordHistory);
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return medicalRecordHistoryList;
    }

    /**
     *
     * Method is used to add Medical Record History into the database
     *
     * @param animalId is the animal to add Medical Record History for
     * @param date is the date the Medical Record History is being added
     */
    public void addMedicalRecordHistory(int animalId, String date){
        try {
            String query = "INSERT INT0 MEDICAL_RECORD_HISTORY (AnimalId, date) VALUES (?, ?)";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, animalId);
            myStmt.setDate(2, Date.valueOf(date));
            myStmt.executeQuery();
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // **************************************************************************
    // ****** SECTION USED FOR MEDICAL RECORD HISTORY QUERY INTERACTIONS ********
    // **************************************************************************









    // *********************************************************************
    // ****** SECTION USED FOR MEDICAL RECORD TYPE QUERY INTERACTIONS ******
    // *********************************************************************

    /**
     *
     * Method is used to search the database for a MedicalRecordType with the entered id and return the object if found
     *
     * @param id is the unique id value to search with
     * @return a new MedicalRecordType object that matches the id passed as an argument
     */
    public MedicalRecordType searchForMedicalRecordType(int id) {
        MedicalRecordType foundMRT = new MedicalRecordType();
        try {
            String query = "SELECT * FROM MEDICAL_RECORD_TYPE WHERE medicalRecordId = ?";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, id);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                if (results.getInt("medicalRecordId") == id) {
                    foundMRT.setMedicalRecordId(id);
                    foundMRT.setMedicalRecordType(results.getString("medicalRecordType"));
                }
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return foundMRT;
    }

    /**
     *
     * Method is used to return an arraylist of MedicalRecordTypes that are in the database
     *
     * @return a new list of MedicalRecordType objects from the db
     */
    public ArrayList<MedicalRecordType> getAllMedicalRecordTypes() {
        ArrayList<MedicalRecordType> medicalRecordTypeArrayList = new ArrayList<MedicalRecordType>();
        try {
            String query = "SELECT * FROM MEDICAL_RECORD_TYPE";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                MedicalRecordType addMRT = new MedicalRecordType();
                addMRT.setMedicalRecordId(results.getInt("medicalRecordId"));
                addMRT.setMedicalRecordType(results.getString("medicalRecordType"));
                medicalRecordTypeArrayList.add(addMRT);
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return medicalRecordTypeArrayList;
    }

    /**
     *
     * Method is used to add a MedicalRecordType into the database based on the entered credentials
     *
     * @param medicalRecordType the type of the Medical Record
     */
    public void addMedicalRecordType(String medicalRecordType) {
        try {
            String query = "INSERT INT0 MEDICAL_RECORD_TYPE (medicalRecordType) VALUES (?)";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setString(1, medicalRecordType);
            myStmt.executeQuery();
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    // *********************************************************************
    // ****** SECTION USED FOR MEDICAL RECORD TYPE QUERY INTERACTIONS ******
    // *********************************************************************












    // **********************************************************************
    // ****** SECTION USED FOR PRESCRIPTION HISTORY QUERY INTERACTIONS ******
    // **********************************************************************

    /**
     *
     * Method is used to search the database for a PrescriptionHistory with the entered id and return the object if found
     *
     * @param id is the unique id value to search with
     * @return a new PrescriptionHistory object that matches the id passed as an argument
     */
    public  PrescriptionHistory searchForPrescriptionHistory(int id) {
        PrescriptionHistory foundPH = new PrescriptionHistory();
        try {
            String query = "SELECT * FROM PRESCRIPTION_HISTORY WHERE requestId = ?";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, id);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                if (results.getInt("prescriptionId") == id) {
                    foundPH.setPrescriptionId(id);
                    foundPH.setUserId(results.getInt("userId"));
                    foundPH.setDate((results.getDate("date").toString()));
                    foundPH.setDrugName(results.getString("drugName"));
                    foundPH.setInstructions(results.getString("instructions"));
                    foundPH.setDosage(results.getDouble("dosage"));
                    foundPH.setDeliveryMethod(results.getString("deliveryMethod"));
                }
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return foundPH;
    }

    /**
     *
     * Method is used to return an arraylist of PrescriptionHistory objects that are in the database
     *
     * @return a new list of PrescriptionHistory objects from the db
     */
    public ArrayList<PrescriptionHistory> getAllPrescriptionHistories() {
        ArrayList<PrescriptionHistory> prescriptionHistoryArrayList = new ArrayList<PrescriptionHistory>();
        try {
            String query = "SELECT * FROM PRESCRIPTION_HISTORY";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                PrescriptionHistory addPH = new PrescriptionHistory();
                addPH.setPrescriptionId(results.getInt("prescriptionId"));
                addPH.setUserId(results.getInt("userId"));
                addPH.setDate((results.getDate("date").toString()));
                addPH.setDrugName(results.getString("drugName"));
                addPH.setInstructions(results.getString("instructions"));
                addPH.setDosage(results.getDouble("dosage"));
                addPH.setDeliveryMethod(results.getString("deliveryMethod"));
                prescriptionHistoryArrayList.add(addPH);
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return prescriptionHistoryArrayList;
    }


    /**
     *
     * Method is used to add a PrescriptionHistory into the database based on the entered credentials
     *
     * @param userId is the ID of the user prescribing the medication
     * @param animalId is the ID of the animal who the prescription history is for
     * @param date is the date the prescription was written
     * @param drugName is the name of the prescribed drug
     * @param instructions are the instructions for how to take the drug
     * @param dosage is the required dosage to be taken
     * @param deliveryMethod is how the medication should be taken
     */
    public void addPrescriptionHistory( int userId, int animalId, String date, String drugName, String instructions, double dosage, String deliveryMethod) {
        try {
            String query = "INSERT INT0 USER (userId, animalId, date, drugName, instructions, dosage, deliveryMethod) VALUES (?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, userId);
            myStmt.setInt(2, animalId);
            myStmt.setDate(3, Date.valueOf(date));
            myStmt.setString(4, drugName);
            myStmt.setString(5, instructions);
            myStmt.setDouble(6, dosage);
            myStmt.setString(7, deliveryMethod);
            myStmt.executeQuery();
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // **********************************************************************
    // ****** SECTION USED FOR PRESCRIPTION HISTORY QUERY INTERACTIONS ******
    // **********************************************************************












    // *********************************************************
    // ****** SECTION USED FOR REQUEST QUERY INTERACTIONS ******
    // *********************************************************

    /**
     *
     * Method is used to search the database for a Request with the entered id and return the object if found
     *
     * @param id is the unique id value to search with
     * @return a new Request object that matches the id passed as an argument
     */
    public  Request searchForRequest(int id) {
        Request foundRequest = new Request();
        try {
            String query = "SELECT * FROM REQUEST WHERE requestId = ?";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, id);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                if (results.getInt("requestId") == id) {
                    foundRequest.setRequestId(id);
                    foundRequest.setAnimalId(results.getInt("animalId"));
                    foundRequest.setUserId(results.getInt("userId"));
                    foundRequest.setNewStatus(results.getBoolean("newStatus"));
                    foundRequest.setAdminApproved(results.getBoolean("adminApproved"));
                    foundRequest.setTechnicianApproved(results.getBoolean("technicianApproved"));
                    foundRequest.setRequestComplete(results.getBoolean("requestComplete"));
                    foundRequest.setRequestSuccessful(results.getBoolean("requestSuccessful"));
                }
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return foundRequest;
    }

    /**
     *
     * Method is used to return an arraylist of Request objects that are in the database
     *
     * @return a new list of Request objects from the db
     */
    public ArrayList<Request> getAllRequests() {
        ArrayList<Request> requestArrayList = new ArrayList<Request>();
        try {
            String query = "SELECT * FROM REQUEST";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                Request addRequest = new Request();
                addRequest.setRequestId(results.getInt("requestId"));
                addRequest.setAnimalId(results.getInt("animalId"));
                addRequest.setUserId(results.getInt("userId"));
                addRequest.setNewStatus(results.getBoolean("newStatus"));
                addRequest.setAdminApproved(results.getBoolean("adminApproved"));
                addRequest.setTechnicianApproved(results.getBoolean("technicianApproved"));
                addRequest.setRequestComplete(results.getBoolean("requestComplete"));
                addRequest.setRequestSuccessful(results.getBoolean("requestSuccessful"));
                requestArrayList.add(addRequest);
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return requestArrayList;
    }

    /**
     *
     * Method is used to add a Request into the database based on the entered credentials
     *
     * @param userId is the ID of the user prescribing the medication
     * @param animalId is the ID of the animal who the prescription history is for
     * @param newStatus is the status of if the request is new or not
     * @param adminApproved states if an admin has approved the request yet or not
     * @param technicianApproved states if a technician has approved the request yet or not
     * @param requestComplete states if the request has been completed
     * @param requestSuccessful states if the request was succesful
     */
    public void addRequest(int animalId, int userId, boolean newStatus, boolean adminApproved, boolean technicianApproved, boolean requestComplete, boolean requestSuccessful) {
        try {
            String query = "INSERT INT0 REQUEST (animalId, userId, newStatus, adminApproved, technicianApproved, requestComplete, requestSuccessful) VALUES (?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, animalId);
            myStmt.setInt(2, userId);
            myStmt.setBoolean(3, adminApproved);
            myStmt.setBoolean(4, technicianApproved);
            myStmt.setBoolean(5, requestComplete);
            myStmt.setBoolean(6, requestSuccessful);
            myStmt.executeQuery();
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    // *********************************************************
    // ****** SECTION USED FOR REQUEST QUERY INTERACTIONS ******
    // *********************************************************












    // ********************************************************
    // ****** SECTION USED FOR STATUS QUERY INTERACTIONS ******
    // ********************************************************
    /**
     *
     * Method is used to search the database for a Status with the entered id and return the object if found
     *
     * @param id is the unique id value to search with
     * @return a new Status object that matches the id passed as an argument
     */
    public Status searchForStatus(int id) {
        Status foundStatus = new Status();
        try {
            String query = "SELECT * FROM STATUS WHERE statusId = ?";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, id);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                if (results.getInt("statusId") == id) {
                    foundStatus.setStatusId(id);
                    foundStatus.setAnimalId(results.getInt("animalId"));
                    foundStatus.setDate(results.getDate("date").toString());
                    foundStatus.setLocation(results.getString("location"));
                    foundStatus.setStatusType(results.getString("statusType"));
                    foundStatus.setImageId(results.getInt("imageId"));
                }
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return foundStatus;
    }

    /**
     *
     * Method is used to return an arraylist of Status objects that are in the database
     *
     * @return a new list of Status objects from the db
     */
    public ArrayList<Status> getAllStatuses() {
        ArrayList<Status> statusArrayList = new ArrayList<Status>();
        try {
            String query = "SELECT * FROM STATUS";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                Status addStatus = new Status();
                addStatus.setStatusId(results.getInt("statusId"));
                addStatus.setAnimalId(results.getInt("animalId"));
                addStatus.setDate(results.getDate("date").toString());
                addStatus.setLocation(results.getString("location"));
                addStatus.setStatusType(results.getString("statusType"));
                addStatus.setImageId(results.getInt("imageId"));
                statusArrayList.add(addStatus);
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return statusArrayList;
    }

    /**
     *
     * Method is used to add a Status into the database based on the entered credentials
     *
     * @param animalId is the ID of the animal who the prescription history is for
     * @param date the date the status was created
     * @param description the status description
     * @param location the location where the status was made
     * @param statusType the type of status
     * @param imageId the ID of the associated image, if any
     */
    public void addRequest(int animalId, String date, String description, String location, String statusType, int imageId) {
        try {
            String query = "INSERT INT0 STATUS (animalId, date, description, location, statusType, imageId) VALUES (?, ?, ?, ?, ?, ?)";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, animalId);
            myStmt.setDate(2, Date.valueOf(date));
            myStmt.setString(3, description);
            myStmt.setString(4, location);
            myStmt.setString(5, statusType);
            myStmt.setInt(6, imageId);
            myStmt.executeQuery();
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    // ********************************************************
    // ****** SECTION USED FOR STATUS QUERY INTERACTIONS ******
    // ********************************************************












    // *******************************************************************
    // ****** SECTION USED FOR TREATMENT HISTORY QUERY INTERACTIONS ******
    // *******************************************************************
    /**
     *
     * Method is used to search the database for a Treatment History with the entered id and return the object if found
     *
     * @param id is the unique id value to search with
     * @return a new TreatmentHistory object that matches the id passed as an argument
     */
    public  TreatmentHistory searchForTreatmentHistory(int id) {
        TreatmentHistory foundTH = new TreatmentHistory();
        try {
            String query = "SELECT * FROM TREATMENT_HISTORY WHERE treatmentId = ?";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, id);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                if (results.getInt("treatmentId") == id) {
                    foundTH.setTreatmentId(id);
                    foundTH.setAnimalId(results.getInt("animalId"));
                    foundTH.setDate(results.getDate("date").toString());
                }
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return foundTH;
    }

    /**
     *
     * Method is used to return an arraylist of TreatmentHistory objects that are in the database
     *
     * @return a new list of TreatmentHistory objects from the db
     */
    public ArrayList<TreatmentHistory> getAllTreatmentHistories() {
        ArrayList<TreatmentHistory> treatmentHistoryArrayList = new ArrayList<TreatmentHistory>();
        try {
            String query = "SELECT * FROM TREATMENT_HISTORY";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                TreatmentHistory addTH = new TreatmentHistory();
                addTH.setTreatmentId(results.getInt("treatmentId"));
                addTH.setAnimalId(results.getInt("animalId"));
                addTH.setDate(results.getDate("date").toString());

                treatmentHistoryArrayList.add(addTH);
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return treatmentHistoryArrayList;
    }

    /**
     *
     * Method is used to add a TreatmentHistory into the database based on the entered credentials
     *
     * @param animalId is the ID of the animal who the prescription history is for
     * @param date the date the status was created
     */
    public void addRequest(int animalId, String date) {
        try {
            String query = "INSERT INT0 TREATMENT_HISTORY (animalId, date) VALUES (?, ?)";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, animalId);
            myStmt.setDate(2, Date.valueOf(date));
            myStmt.executeQuery();
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    // *******************************************************************
    // ****** SECTION USED FOR TREATMENT HISTORY QUERY INTERACTIONS ******
    // *******************************************************************












    // ******************************************************************
    // ****** SECTION USED FOR TREATMENT METHOD QUERY INTERACTIONS ******
    // ******************************************************************
    /**
     *
     * Method is used to search the database for a Treatment Method with the entered id and return the object if found
     *
     * @param id is the unique id value to search with
     * @return a new TreatmentMethod object that matches the id passed as an argument
     */
    public  TreatmentMethod searchForTreatmentMethod(int id) {
        TreatmentMethod foundTM = new TreatmentMethod();
        try {
            String query = "SELECT * FROM TREATMENT_METHOD WHERE treatmentId = ?";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, id);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                if (results.getInt("treatmentId") == id) {
                    foundTM.setTreatmentId(id);
                    foundTM.setTreatmentType(results.getString("treatmentType"));
                }
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return foundTM;
    }

    /**
     *
     * Method is used to return an arraylist of TreatmentMethod objects that are in the database
     *
     * @return a new list of TreatmentMethod objects from the db
     */
    public ArrayList<TreatmentMethod> getAllTreatmentMethods() {
        ArrayList<TreatmentMethod> treatmentMethodArrayList = new ArrayList<TreatmentMethod>();
        try {
            String query = "SELECT * FROM TREATMENT_METHOD";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                TreatmentMethod addTM = new TreatmentMethod();
                addTM.setTreatmentId(results.getInt("treatmentId"));
                addTM.setTreatmentType(results.getString("treatmentType"));
                treatmentMethodArrayList.add(addTM);

            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return treatmentMethodArrayList;
    }

    /**
     *
     * Method is used to add a TreatmentMethod into the database based on the entered credentials
     *
     * @param treatmentType the type of treatment
     */
    public void addRequest(String treatmentType) {
        try {
            String query = "INSERT INT0 TREATMENT_METHOD (treatmentType) VALUES (?)";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setString(1, treatmentType);
            myStmt.executeQuery();
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    // ******************************************************************
    // ****** SECTION USED FOR TREATMENT METHOD QUERY INTERACTIONS ******
    // ******************************************************************





    // ******************************************************
    // ****** SECTION USED FOR USER QUERY INTERACTIONS ******
    // ******************************************************


    /**
     *
     * Method is used to search the database for a user with the entered username and passowrd, then return the User object if found
     *
     * @param email is the email entered
     * @param password is the password entered
     * @return the User object associated with the input username and password
     */
    public User searchUserByEmailAndPassword(String email, String password) {
        User foundUser = new User();
        try {
            String query = "SELECT * FROM USER WHERE email = ? AND password = ?";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setString(1, email);
            myStmt.setString(2, password);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                foundUser.setUserId(results.getInt("userId"));
                foundUser.setFName(results.getString("fName"));
                foundUser.setLName(results.getString("lName"));
                foundUser.setEmail(results.getString("email"));
                foundUser.setActivationDate(results.getDate("activationDate").toString());
                foundUser.setUserType(results.getString("userType"));
                foundUser.setPassword(results.getString("password"));
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return foundUser;
    }

    /**
     *
     * Method is used to search the database for a user with the entered id and return the User object if found
     *
     * @param id is the unique id value to search with
     * @return a new user object that matches the id passed as an argument
     */
    public User searchForUser(int id) {
        User foundUser = new User();
        try {
            String query = "SELECT * FROM USER WHERE userId = ?";

            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setInt(1, id);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                if (results.getInt("userId") == id) {
                    foundUser.setUserId(id);
                    foundUser.setFName(results.getString("fName"));
                    foundUser.setLName(results.getString("lName"));
                    foundUser.setEmail(results.getString("email"));
                    foundUser.setActivationDate(results.getDate("activationDate").toString());
                    foundUser.setUserType(results.getString("userType"));
                    foundUser.setPassword(results.getString("password"));

                }
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return foundUser;
    }

    /**
     *
     *
     * Method is used to return an arraylist of users that are in the database
     *
     * @return a new list of user objects from the db
     */
    public ArrayList<User> getAllUsers() {
        ArrayList<User> userList = new ArrayList<User>();
        try {
            String query = "SELECT * FROM USER";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            ResultSet results = myStmt.executeQuery();
            while (results.next()) {
                User addUser = new User();
                addUser.setUserId(results.getInt("userId"));
                addUser.setFName(results.getString("fName"));
                addUser.setLName(results.getString("lName"));
                addUser.setEmail(results.getString("email"));
                addUser.setActivationDate(results.getDate("activationDate").toString());
                addUser.setUserType(results.getString("userType"));
                addUser.setPassword(results.getString("password"));
                userList.add(addUser);
            }
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return userList;

    }



    /**
    *
    * Method is used to add a user into the database based on the entered credentials
    *
    * @param fName is the first name of the user
    * @param lName is the last name of the user
    * @param email is the email of the user
    * @param activationDate is the date that the user is activated in the system
    * @param userType is the type of user (Student, Teacher, Admin ...)
    */
    public void addUser(String fName, String lName, String email, String activationDate, String userType, String password) {
        try {
            String query = "INSERT INT0 USER (fName, lName, email, activationDate, userType, password) VALUES (?, ?, ?, ?, ?, ?)";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setString(1, fName);
            myStmt.setString(2, lName);
            myStmt.setString(3, email);
            myStmt.setDate(4, Date.valueOf(activationDate));
            myStmt.setString(5, password);
            myStmt.executeQuery();
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     *
     * Method is used to update a user's settings based on the input arguments
     *
     * @param userId is the unique id of the user
     * @param fName is the first name of the user
     * @param lName is the last name of the user
     * @param email is the email of the user
     * @param password is the password of the user
     */
    public void updatePersonalSettings(int userId, String fName, String lName, String email, String password) {
        try {
            String query = "UPDATE USER SET fName = ?, lName = ?, email = ?, password = ? WHERE userId = ?";
            PreparedStatement myStmt = this.dbConnect.prepareStatement(query);
            myStmt.setString(1, fName);
            myStmt.setString(2, lName);
            myStmt.setString(3, email);
            myStmt.setString(4, password);
            myStmt.setInt(5, userId);
            myStmt.executeUpdate();
            myStmt.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // ******************************************************
    // ****** SECTION USED FOR USER QUERY INTERACTIONS ******
    // ******************************************************
}