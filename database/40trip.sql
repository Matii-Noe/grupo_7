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
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Buenos Aires','En este tour disfrutaremos de Buenos Aires con sus bares,\r\nlibrerías, teatros y hermosos parques.',37,'Buenos Aires: City Tour.','Destinos','Aerolíneas Argentinas','Cyan Américas Towers Hotel','Habitación estándar',3,'bs-as-big.jpeg','bs-as-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(2,'Puerto Iguazú','En este tour disfrutaremos del Puerto Iguazu \r\nen una recorrida por las Ruinas de San Ignacio\r\n con Minas de Wanda.',34,'Ruinas de San Ignacio con Minas de Wanda.','Destinos','JetSMART','Complejo Turístico Americano','Habitación Doble Superior',3,'iguazu-big.jpeg','iguazu-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(3,'Bariloche','Con este tour disfrutará de San Carlos de Bariloche, \r\nuno de los atractivos turísticos más importantes para \r\nlos amantes de la nieve, conocerá San Martín de los Andes \r\ny el lago Nahuel Huapi. Además, disfrutará del característico\r\n chocolate de la ciudad.',112,'Circuito Chico: nos dará un panorama de Bariloche y sus atractivos más cercanos.','Destinos','Flybondi','Hotel Nevada','Habitación estándar',4,'bariloche-big.jpeg','bariloche-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(4,'El Calafate','En este tour conocerá a la ciudad de Calafate, \r\ndesde donde recorrerá y contempla los increibles\r\n paisajes patagónicos, y los glaciares de la región.',83,'Trekking sobre Hielo en el Glaciar Perito Moreno.','Destinos','Aerolíneas Argentinas','Lagos del Calafate','Habitación doble superior',4,'calafate-big.jpeg','calafate-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(5,'El Chaltén','Este tour se ha creado específicamente para \r\ntodo aquel que quiera recorrer eficientemente \r\nla Capital Nacional del Trekking.',146,'Trekking de día completo por Reservas Los Huemules, Loma del Diablo y Lodge Laguna Cóndor.','Destinos','JetSMART','Hostería El Paraíso','Habitación estándar',4,'chalten-big.jpeg','chalten-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(6,'Ushuaia','En este tour visitará Ushuaia, recorrerá el canal Beagle,\r\n y conocerá el Glaciar Perito Moreno y el Parque \r\nNacional Tierra del Fuego.',64,'Parque Nacional Tierra del Fuego. Navegación por Canal Beagle en Yate.','Recomendados','Flybondi','Albatros Hotel','Habitación estándar',5,'ushuaia-big.jpeg','ushuaia-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(7,'Puerto Madryn',' Un viaje ideal para conocer uno de los más importantes destinos de naturaleza de Argentina',72,'Visita Pingüinera El Pedral y colonia de pingüinos de Magallanes.','Estilos de viaje','Aerolíneas Argentinas','Hotel La Posada De Madryn','Habitación superior',4,'puertoMadryn-big.jpeg','puertoMadryn-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(8,'Torres del Paine',' Tour de primera clase visitando los principales \r\natractivos del Parque Nacional Torres del Paine.',113,'Torres del Paine y Puerto Natales.','Recomendados','Aerolíneas Argentinas','Explora Patagonia Hotel Salto Chico','Habitación superior',4,'torresdelPaine-big.jpeg','torresdelPaine-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(9,'Mendoza','En este maravilloso tour podrás disfrutar de la mejor \r\naventura en Argentina por La Cordillera de los Andes \r\nen Mendoza: tirolesa, rafting, cabalgata y más.\r\n',79,'Clase de Cocina en Bodega y degustación de vinos.','Estilos de viaje','JetSMART','Argentino Hotel','Habitación estándar',4,'mendoza-big.jpeg','mendoza-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(10,'Salta','La escapada ideal para conocer una Argentina \r\nmucho más profunda. Pueblos originarios y \r\ncostumbres prehispánicas, paisajes de belleza \r\nimpactante y la oportunidad de disfrutar la \r\nexquisita cocina regional.',64,'Salta, City Tour.','Recomendados','Aerolíneas Argentinas','Hotel Salta','Habitación doble executive con Minibar',4,'salta-big.jpeg','salta-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(11,'Esteros del Iberá','Escapada a Esteros del Iberá en Puerto Valle. \r\nFundado en 1868, Puerto Valle es un hotel boutique \r\ncon servicio de lujo, situado en una región tiene \r\nacceso exclusivo a los Esteros del Iberá en la \r\nLaguna Valle.',108,'Navegación en el Río Paraná y Cabalgata por la estancia.','Estilos de viaje','Aerolíneas Argentinas','Puerto Valle Hotel de Esteros','Habitación estándar',4,'esterosdelIbera-big.jpeg','esterosdelIbera-medium.jpeg','2022-06-20 01:07:20',NULL,NULL),(35,'Rosario','Hola mundo',10,'Visita guiada en bus turístico','destinos','Jet','Hotel 1','Doble',6,'bigImg-1655684853939.jpg','mediumImg-1655684853941.jpg','2022-06-20 01:07:20',NULL,NULL),(36,'San Nicolas','una descripcion',15,'Visita guiada en bus turístico','estilos','Aerolineas Argentinas','Plaza Rosario','Estandar',3,'bigImg-1655685070984.jpg','mediumImg-1655685070987.jpg','2022-06-20 01:07:20',NULL,NULL),(37,'San Nicolas','una descripcion',15,'Visita guiada en bus turístico','estilos','Aerolineas Argentinas','Plaza Rosario','Estandar',3,'bigImg-1655685110901.jpg','mediumImg-1655685110903.jpg','2022-06-20 01:07:20',NULL,NULL),(38,'EEUU','No existe este viaje',15,'Visita guiada en bus turístico','destinos','Uno','No existe','aaaaaaa',0,'bigImg-1655685242869.jpg','mediumImg-1655685242871.jpg','2022-06-20 01:07:20',NULL,NULL),(39,'EEUU','No existe este viaje',15,'Visita guiada en bus turístico','destinos','Uno','No existe','aaaaaaa',0,'bigImg-1655685270092.jpg','mediumImg-1655685270095.jpg','2022-06-20 01:07:20',NULL,NULL),(40,'Rosario','aaaaaaaaaaa',15000,'Visita guiada en bus turístico','destinos','Jet','avbacd','Doble',3,'bigImg-1655685461773.jpg','mediumImg-1655685461774.jpg','2022-06-20 01:07:20',NULL,NULL);
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ferrari','manuelferrari@gmail.com','12345','user','img.jpg','Manuel'),(2,'Gomez','josegomez@gmail.com','22235','user','img.jpg','Ricardo'),(3,'Vigna','florvigna@gmail.com','55555','user','img.jpg','Florencia'),(4,'Escobar','p_escobar@gmail.com','54321','user','img.jpg','Pablo'),(5,'Rossi','azu_rossi@gmail.com','10001','user','img.jpg','Azul'),(6,'Perez','enzo_p@gmail.com','33333','user','img.jpg','Enzo'),(7,'Ronaldo','cr7@gmail.com','12344','user','img.jpg','Cristiano'),(8,'Magno','ale_magno@gmail.com','22222','user','img.jpg','Alejandro'),(9,'Bonaparte','bonaparte_33@gmail.com','55110','user','img.jpg','Napoleon');
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

-- Dump completed on 2022-06-19 22:10:36
