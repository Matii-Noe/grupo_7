-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: 40trip
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `finalPrice` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_FK` (`user_id`),
  CONSTRAINT `orders_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productName` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `activityName` varchar(100) DEFAULT NULL,
  `categoryName` varchar(100) DEFAULT NULL,
  `operatedBy` varchar(100) DEFAULT NULL,
  `hotelName` varchar(100) DEFAULT NULL,
  `roomType` varchar(100) DEFAULT NULL,
  `nights` int(11) DEFAULT NULL,
  `bigImg` varchar(100) DEFAULT NULL,
  `mediumImg` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Buenos Aires','En este tour disfrutaremos de Buenos Aires con sus bares,\r\nlibrer??as, teatros y hermosos parques.',37,'Buenos Aires: City Tour.','Destinos','Aerol??neas Argentinas','Cyan Am??ricas Towers Hotel','Habitaci??n est??ndar',3,'bs-as-big.jpeg','bs-as-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(2,'Puerto Iguaz??','En este tour disfrutaremos del Puerto Iguazu \r\nen una recorrida por las Ruinas de San Ignacio\r\n con Minas de Wanda.',34,'Ruinas de San Ignacio con Minas de Wanda.','Destinos','JetSMART','Complejo Tur??stico Americano','Habitaci??n Doble Superior',3,'iguazu-big.jpeg','iguazu-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(3,'Bariloche','Con este tour disfrutar?? de San Carlos de Bariloche, \r\nuno de los atractivos tur??sticos m??s importantes para \r\nlos amantes de la nieve, conocer?? San Mart??n de los Andes \r\ny el lago Nahuel Huapi. Adem??s, disfrutar?? del caracter??stico\r\n chocolate de la ciudad.',112,'Circuito Chico: nos dar?? un panorama de Bariloche y sus atractivos m??s cercanos.','Destinos','Flybondi','Hotel Nevada','Habitaci??n est??ndar',4,'bariloche-big.jpeg','bariloche-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(4,'El Calafate','En este tour conocer?? a la ciudad de Calafate, \r\ndesde donde recorrer?? y contempla los increibles\r\n paisajes patag??nicos, y los glaciares de la regi??n.',83,'Trekking sobre Hielo en el Glaciar Perito Moreno.','Destinos','Aerol??neas Argentinas','Lagos del Calafate','Habitaci??n doble superior',4,'calafate-big.jpeg','calafate-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(5,'El Chalt??n','Este tour se ha creado espec??ficamente para \r\ntodo aquel que quiera recorrer eficientemente \r\nla Capital Nacional del Trekking.',146,'Trekking de d??a completo por Reservas Los Huemules, Loma del Diablo y Lodge Laguna C??ndor.','Destinos','JetSMART','Hoster??a El Para??so','Habitaci??n est??ndar',4,'chalten-big.jpeg','chalten-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(6,'Ushuaia','En este tour visitar?? Ushuaia, recorrer?? el canal Beagle,\r\n y conocer?? el Glaciar Perito Moreno y el Parque \r\nNacional Tierra del Fuego.',64,'Parque Nacional Tierra del Fuego. Navegaci??n por Canal Beagle en Yate.','Recomendados','Flybondi','Albatros Hotel','Habitaci??n est??ndar',5,'ushuaia-big.jpeg','ushuaia-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(7,'Puerto Madryn',' Un viaje ideal para conocer uno de los m??s importantes destinos de naturaleza de Argentina',72,'Visita Ping??inera El Pedral y colonia de ping??inos de Magallanes.','Estilos de viaje','Aerol??neas Argentinas','Hotel La Posada De Madryn','Habitaci??n superior',4,'puertoMadryn-big.jpeg','puertoMadryn-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(8,'Torres del Paine',' Tour de primera clase visitando los principales \r\natractivos del Parque Nacional Torres del Paine.',113,'Torres del Paine y Puerto Natales.','Recomendados','Aerol??neas Argentinas','Explora Patagonia Hotel Salto Chico','Habitaci??n superior',4,'torresdelPaine-big.jpeg','torresdelPaine-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(9,'Mendoza','En este maravilloso tour podr??s disfrutar de la mejor \r\naventura en Argentina por La Cordillera de los Andes \r\nen Mendoza: tirolesa, rafting, cabalgata y m??s.\r\n',79,'Clase de Cocina en Bodega y degustaci??n de vinos.','Estilos de viaje','JetSMART','Argentino Hotel','Habitaci??n est??ndar',4,'mendoza-big.jpeg','mendoza-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(10,'Salta','La escapada ideal para conocer una Argentina \r\nmucho m??s profunda. Pueblos originarios y \r\ncostumbres prehisp??nicas, paisajes de belleza \r\nimpactante y la oportunidad de disfrutar la \r\nexquisita cocina regional.',64,'Salta, City Tour.','Recomendados','Aerol??neas Argentinas','Hotel Salta','Habitaci??n doble executive con Minibar',4,'salta-big.jpeg','salta-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(11,'Esteros del Iber??','Escapada a Esteros del Iber?? en Puerto Valle. \r\nFundado en 1868, Puerto Valle es un hotel boutique \r\ncon servicio de lujo, situado en una regi??n tiene \r\nacceso exclusivo a los Esteros del Iber?? en la \r\nLaguna Valle.',108,'Navegaci??n en el R??o Paran?? y Cabalgata por la estancia.','Estilos de viaje','Aerol??neas Argentinas','Puerto Valle Hotel de Esteros','Habitaci??n est??ndar',4,'esterosdelIbera-big.jpeg','esterosdelIbera-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(46,'Glaciar Perito Moreno','El glaciar Perito Moreno se encuentra ubicado en el Parque Nacional de los Glaciares. \r\nEste avanza sobre la Pen??nsula Magallanes creando un dique que encierra al brazo rico del lago argentino.',500,'Recorrida por el Parque Nacional Los Glaciares','Destinos','Flybondi','Estancia la Serena','Habitaci??n Doble',6,'peritoMoreno-big.jpeg','peritoMoreno-medium.jpeg','2022-06-23 20:11:50',NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_orders`
--

DROP TABLE IF EXISTS `products_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_orders` (
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  KEY `products_orders_FK` (`product_id`),
  KEY `products_orders_FK_1` (`order_id`),
  CONSTRAINT `products_orders_FK` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `products_orders_FK_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_orders`
--

LOCK TABLES `products_orders` WRITE;
/*!40000 ALTER TABLE `products_orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lastName` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `userRole` varchar(100) DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `firstName` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ferrari','manuelferrari@gmail.com','12345','user','img.jpg','Manuel',NULL,NULL,NULL),(2,'Gomez','josegomez@gmail.com','22235','user','img.jpg','Ricardo',NULL,NULL,NULL),(3,'Vigna','florvigna@gmail.com','55555','user','img.jpg','Florencia',NULL,NULL,NULL),(4,'Escobar','p_escobar@gmail.com','54321','user','img.jpg','Pablo',NULL,NULL,NULL),(5,'Rossi','azu_rossi@gmail.com','10001','user','img.jpg','Azul',NULL,NULL,NULL),(6,'Perez','enzo_p@gmail.com','33333','user','img.jpg','Enzo',NULL,NULL,NULL),(7,'Ronaldo','cr7@gmail.com','12344','user','img.jpg','Cristiano',NULL,NULL,NULL),(8,'Magno','ale_magno@gmail.com','22222','user','img.jpg','Alejandro',NULL,NULL,NULL),(9,'Bonaparte','bonaparte_33@gmail.com','55110','user','img.jpg','Napoleon',NULL,NULL,NULL),(10,'Nooe','eeee@gmail.com','$2a$10$kk.5M.MiiiwlLLnso1DLe.W4ZUOrLty9k5NtmQGFaqpkclxucySu.','admin',NULL,'Matiaas','2022-06-20 20:17:26','2022-06-20 20:17:26',NULL),(11,'Noe','mnoe@prueba.com','$2a$10$ysrCRttBptesbdtBAU6.l.Qx5w1dP2AuvLU74T29owNRHOKbYhvI6','usuario','img.jpg','Mat','2022-06-20 21:20:46','2022-06-20 21:20:46',NULL),(12,'Nooe','abcdes@gmail.com','$2a$10$6m9ikb95mKb7NdIQqqC7AuuRWpGgpUc3Jkjr61ODy78/dQeJ00FjK','admin','avatar-1655842468125.jpg','Mat','2022-06-21 20:14:28','2022-06-21 20:14:28',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database '40trip'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-23 17:13:10
