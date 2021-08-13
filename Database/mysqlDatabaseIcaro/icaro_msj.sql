-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: icaro
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `msj`
--

DROP TABLE IF EXISTS `msj`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `msj` (
  `msjId` int NOT NULL AUTO_INCREMENT,
  `sender` varchar(255) NOT NULL,
  `addressee` varchar(255) NOT NULL,
  `msjs` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `readerreceived` int NOT NULL,
  `readersender` int NOT NULL,
  PRIMARY KEY (`msjId`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `msj`
--

LOCK TABLES `msj` WRITE;
/*!40000 ALTER TABLE `msj` DISABLE KEYS */;
INSERT INTO `msj` VALUES (1,'icaro@gmail.com','icaro@gmail.com','Prueba 1','Fri Aug 13 2021 03:05:44 GMT+0200 (Central European Summer Time)',1,1),(2,'icaro@gmail.com','michel@gmail.com','Prueba 2','Fri Aug 13 2021 03:05:52 GMT+0200 (Central European Summer Time)',1,1),(3,'icaro@gmail.com','prueba@gmail.com','Prueba 3','Fri Aug 13 2021 03:06:01 GMT+0200 (Central European Summer Time)',1,1),(4,'michel@gmail.com','icaro@gmail.com','Prueba 4','Fri Aug 13 2021 03:06:25 GMT+0200 (Central European Summer Time)',1,1),(5,'michel@gmail.com','michel@gmail.com','Prueba 5','Fri Aug 13 2021 03:06:32 GMT+0200 (Central European Summer Time)',1,1),(6,'michel@gmail.com','prueba@gmail.com','Prueba 6','Fri Aug 13 2021 03:06:40 GMT+0200 (Central European Summer Time)',1,1),(7,'prueba@gmail.com','icaro@gmail.com','Prueba 7','Fri Aug 13 2021 03:07:06 GMT+0200 (Central European Summer Time)',1,1),(8,'prueba@gmail.com','michel@gmail.com','Prueba 8','Fri Aug 13 2021 03:07:13 GMT+0200 (Central European Summer Time)',1,1),(9,'prueba@gmail.com','prueba@gmail.com','Prueba 9','Fri Aug 13 2021 03:07:21 GMT+0200 (Central European Summer Time)',1,1),(10,'icaro@gmail.com','icaro@gmail.com','Prueba 10','Fri Aug 13 2021 03:07:43 GMT+0200 (Central European Summer Time)',1,1),(11,'icaro@gmail.com','michel@gmail.com','Prueba 11','Fri Aug 13 2021 03:07:51 GMT+0200 (Central European Summer Time)',1,1),(12,'icaro@gmail.com','prueba@gmail.com','Prueba 12','Fri Aug 13 2021 03:07:57 GMT+0200 (Central European Summer Time)',1,1),(13,'icaro@gmail.com','icaro@gmail.com','Prueba 13','Fri Aug 13 2021 03:08:04 GMT+0200 (Central European Summer Time)',1,1),(14,'icaro@gmail.com','prueba@gmail.com','Prueba 14','Fri Aug 13 2021 03:08:18 GMT+0200 (Central European Summer Time)',1,1),(15,'icaro@gmail.com','icaro@gmail.com','Prueba 15','Fri Aug 13 2021 03:08:26 GMT+0200 (Central European Summer Time)',1,1),(16,'icaro@gmail.com','michel@gmail.com','Prueba 16','Fri Aug 13 2021 03:08:33 GMT+0200 (Central European Summer Time)',1,1),(17,'icaro@gmail.com','prueba@gmail.com','Prueba 17','Fri Aug 13 2021 03:08:42 GMT+0200 (Central European Summer Time)',1,1);
/*!40000 ALTER TABLE `msj` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-13  3:16:26
