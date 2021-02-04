-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.16-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para tavarinho
CREATE DATABASE IF NOT EXISTS `tavarinho` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `tavarinho`;

-- Copiando estrutura para tabela tavarinho.vrp_user_vehicles
CREATE TABLE IF NOT EXISTS `vrp_user_vehicles` (
  `user_id` int(11) NOT NULL,
  `vehicle` varchar(100) NOT NULL,
  `detido` int(1) NOT NULL DEFAULT 0,
  `time` varchar(24) NOT NULL DEFAULT '0',
  `engine` int(4) NOT NULL DEFAULT 1000,
  `body` int(4) NOT NULL DEFAULT 1000,
  `fuel` int(3) NOT NULL DEFAULT 100,
  `ipva` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`vehicle`),
  CONSTRAINT `fk_user_vehicles_users` FOREIGN KEY (`user_id`) REFERENCES `vrp_users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela tavarinho.vrp_user_vehicles: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `vrp_user_vehicles` DISABLE KEYS */;
INSERT INTO `vrp_user_vehicles` (`user_id`, `vehicle`, `detido`, `time`, `engine`, `body`, `fuel`, `ipva`) VALUES
	(1, 'adder', 0, '0', 1000, 1000, 100, 1611433196),
	(1, 'akuma', 0, '0', 1000, 1000, 100, 1611435513),
	(1, 'alpha', 0, '0', 1000, 1000, 100, 1611433354),
	(1, 'asea', 0, '0', 1000, 1000, 100, 1611433378),
	(1, 'asterope', 0, '0', 1000, 1000, 100, 1611435509),
	(1, 'autarch', 0, '0', 1000, 1000, 100, 1611435511),
	(1, 'avarus', 0, '0', 1000, 1000, 100, 1611435516),
	(1, 'bagger', 0, '0', 1000, 1000, 100, 1611435517),
	(1, 'bati', 0, '0', 1000, 1000, 100, 1611435519),
	(1, 'bati2', 0, '0', 1000, 1000, 100, 1611435520);
/*!40000 ALTER TABLE `vrp_user_vehicles` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
