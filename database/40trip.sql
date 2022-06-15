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
-- Table structure for table `activities`
--

DROP TABLE IF EXISTS `activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `activities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activityName` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activities`
--

LOCK TABLES `activities` WRITE;
/*!40000 ALTER TABLE `activities` DISABLE KEYS */;
INSERT INTO `activities` VALUES (1,'Buenos Aires: City Tour.'),(2,'Delta del Tigre y Navegación.'),(3,'Cena Show de Tango.'),(4,'Ruinas de San Ignacio con Minas de Wanda.'),(5,'Circuito Chico: nos dará un panorama de Bariloche y sus atractivos más cercanos.'),(6,'San Martín de los Andes por la Ruta de los 7 Lagos.'),(7,'Navegación Puerto Blest y Cascada de los Cántaros con Lago Frías.'),(8,'Trekking sobre Hielo en el Glaciar Perito Moreno.'),(9,'Navegación Glaciares Gourmet por el Lago Argentino.'),(10,'Trekking de día completo por Reservas Los Huemules, Loma del Diablo y Lodge Laguna Cóndor.'),(11,'Campamento Poincenot, Glaciar Piedras Blancas, Cerro Fitz Roy y Laguna de los Tres.'),(12,'Valle de las lagunas Madre e Hija, Laguna Torre y Glaciar Grande.'),(13,'Parque Nacional Tierra del Fuego. Navegación por Canal Beagle en Yate.'),(14,'Isla Martillo y Caminata con Pingüinos.'),(15,'Península de Valdés con avistaje de ballenas o fauna marina.'),(16,'Visita Pingüinera El Pedral y colonia de pingüinos de Magallanes.'),(17,'Lobería Punta Loma.'),(18,'Cabalgata por la pampa y ríos del parque.Dentro del hotel.'),(19,'Navegación por las aguas turquesas del lago Pehoé.Dentro del hotel.'),(20,'Torres del Paine y Puerto Natales.'),(21,'Trekking, Rappel y Tirolesa en Potrerillos.'),(22,'Cabalgata en Quebrada de Cóndor.'),(23,'Clase de Cocina en Bodega y degustación de vinos.'),(24,'Salta, City Tour.'),(25,'Recorrido por la Quebrada del Río Las Conchas.'),(26,'Vuelta a los Valles Calchaquíes.'),(27,'Navegación en el Río Paraná y Cabalgata por la estancia.'),(28,'Expedición Laguna Valle + Parque, vivero y Huerta Orgánica.'),(29,'Safari fotográfico al Portal Cambyretá.');
/*!40000 ALTER TABLE `activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Destinos'),(2,'Estilos de viaje'),(3,'Recomendados'),(4,'Nosotros');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotels`
--

DROP TABLE IF EXISTS `hotels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hotels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hotelName` varchar(100) DEFAULT NULL,
  `roomType` varchar(100) DEFAULT NULL,
  `nights` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotels`
--

LOCK TABLES `hotels` WRITE;
/*!40000 ALTER TABLE `hotels` DISABLE KEYS */;
INSERT INTO `hotels` VALUES (1,'Cyan Américas Towers Hotel','Habitación estándar',3),(2,'Complejo Turístico Americano','Habitación Doble Superior',3),(3,'Hotel Nevada','Habitación estándar',4),(4,'Lagos Del Calafate','Habitación Doble Superior',4),(5,'Hostería El Paraíso','Habitación estándar',4),(6,'Albatros Hotel','Habitación estándar',5),(7,'Hotel La Posada De Madryn','Habitación superior',4),(8,'Hotel Salto Chico','Habitación superior',4),(9,'Argentino Hotel','Habitación estándar',4),(10,'Hotel Salta','Habitación Doble Executive con Minibar',4),(11,'Puerto Valle Hotel de Esteros','Habitación estándar',4);
/*!40000 ALTER TABLE `hotels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `big` varchar(100) DEFAULT NULL,
  `medium` varchar(100) DEFAULT NULL,
  `small1` varchar(100) DEFAULT NULL,
  `small2` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'bs-as-big.jpeg','bs-as-medium.jpeg','bs-as-little1.jpeg','bs-as-little2.jpeg'),(2,'iguazu-big.jpeg','iguazu-medium.jpeg','iguazu-little1.jpeg','iguazu-little2.jpeg'),(3,'bariloche-big.jpeg','bariloche-medium.jpeg','bariloche-little1.jpeg','bariloche-little2.jpeg'),(4,'calafate-big.jpeg','calafate-medium.jpeg','calafate-little1.jpeg','calafate-little2.jpeg'),(5,'chalten-big.jpeg','chalten-medium.jpeg','chalten-little1.jpeg','chalten-little2.jpeg'),(6,'ushuaia-big.jpeg','ushuaia-medium.jpeg','ushuaia-little1.jpeg','ushuaia-little2.jpeg'),(7,'puertoMadryn-big.jpeg','puertoMadryn-medium.jpeg','puertoMadryn-little1.jpeg','puertoMadryn-little2.jpeg'),(8,'torresdelPaine-big.jpeg','torresdelPaine-medium.jpeg','torresdelPaine-little1.jpeg','torresdelPaine-little2.jpeg'),(9,'mendoza-big.jpeg','mendoza-medium.jpeg','mendoza-little1.jpeg','mendoza-little2.jpeg'),(10,'salta-big.jpeg','salta-medium.jpeg','salta-little1.jpeg','salta-little2.jpeg'),(11,'esterosdelIbera-big.jpeg','esterosdelIbera-medium.jpeg','esterosdelIbera-little1.jpeg','esterosdelIbera-little2.jpeg');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

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
  `transport_id` int(11) DEFAULT NULL,
  `hotel_id` int(11) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `activity_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`transport_id`),
  KEY `products_FK_1` (`hotel_id`),
  KEY `products_FK_2` (`image_id`),
  KEY `products_FK_3` (`category_id`),
  KEY `products_FK_4` (`activity_id`),
  CONSTRAINT `products_FK` FOREIGN KEY (`transport_id`) REFERENCES `transports` (`id`),
  CONSTRAINT `products_FK_1` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`),
  CONSTRAINT `products_FK_2` FOREIGN KEY (`image_id`) REFERENCES `images` (`id`),
  CONSTRAINT `products_FK_3` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_FK_4` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Buenos Aires','En este tour disfrutaremos de Buenos Aires con sus bares,\r\nlibrerías, teatros y hermosos parques.',1,1,1,37,1,1),(2,'Puerto Iguazú','En este tour disfrutaremos del Puerto Iguazu \r\nen una recorrida por las Ruinas de San Ignacio\r\n con Minas de Wanda.',2,2,2,34,1,4),(3,'Bariloche','Con este tour disfrutará de San Carlos de Bariloche, \r\nuno de los atractivos turísticos más importantes para \r\nlos amantes de la nieve, conocerá San Martín de los Andes \r\ny el lago Nahuel Huapi. Además, disfrutará del característico\r\n chocolate de la ciudad.',3,3,3,112,2,6),(4,'El Calafate','En este tour conocerá a la ciudad de Calafate, \r\ndesde donde recorrerá y contempla los increibles\r\n paisajes patagónicos, y los glaciares de la región.',1,4,4,83,2,7),(5,'El Chaltén','Este tour se ha creado específicamente para \r\ntodo aquel que quiera recorrer eficientemente \r\nla Capital Nacional del Trekking.',1,5,5,146,3,10),(6,'Ushuaia','En este tour visitará Ushuaia, recorrerá el canal Beagle,\r\n y conocerá el Glaciar Perito Moreno y el Parque \r\nNacional Tierra del Fuego.',2,6,6,64,3,13),(7,'Puerto Madryn',' Un viaje ideal para conocer uno de los más importantes destinos de naturaleza de Argentina',1,7,7,72,1,16),(8,'Torres del Paine',' Tour de primera clase visitando los principales \r\natractivos del Parque Nacional Torres del Paine.',1,8,8,113,1,20),(9,'Mendoza','En este maravilloso tour podrás disfrutar de la mejor \r\naventura en Argentina por La Cordillera de los Andes \r\nen Mendoza: tirolesa, rafting, cabalgata y más.\r\n',1,9,9,79,2,23),(10,'Salta','La escapada ideal para conocer una Argentina \r\nmucho más profunda. Pueblos originarios y \r\ncostumbres prehispánicas, paisajes de belleza \r\nimpactante y la oportunidad de disfrutar la \r\nexquisita cocina regional.',1,10,10,64,2,24),(11,'Esteros del Iberá','Escapada a Esteros del Iberá en Puerto Valle. \r\nFundado en 1868, Puerto Valle es un hotel boutique \r\ncon servicio de lujo, situado en una región tiene \r\nacceso exclusivo a los Esteros del Iberá en la \r\nLaguna Valle.',1,11,11,108,3,29);
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
-- Table structure for table `transports`
--

DROP TABLE IF EXISTS `transports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `transportName` varchar(100) DEFAULT NULL,
  `operatedBy` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transports`
--

LOCK TABLES `transports` WRITE;
/*!40000 ALTER TABLE `transports` DISABLE KEYS */;
INSERT INTO `transports` VALUES (1,'Vuelo','Aerolineas Argentinas'),(2,'Vuelo','JetSMART'),(3,'Vuelo','Flybondi');
/*!40000 ALTER TABLE `transports` ENABLE KEYS */;
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

-- Dump completed on 2022-06-15 10:59:14
