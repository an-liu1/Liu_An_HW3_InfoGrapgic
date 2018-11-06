-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 01, 2018 at 04:36 PM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movieinfo`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
CREATE TABLE IF NOT EXISTS `movies` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `fullcontent` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `title`, `fullcontent`) VALUES
(1, 'BLACK PANTHER', 'After the death of his father, T\'Challa, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T\'Challa\'s mettle as king and Black Panther is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life.'),
(2, 'Avengers: Infinity War', 'An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios\' Avengers: Infinity War brings to the screen the ultimate showdown of all time. The Avengers and their Super Hero allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos.'),
(3, 'Incredibles 2', 'Helen is called on to help bring Supers back, while Bob navigates the day-to-day heroics of \\\"normal\\\" life at home with Violet, Dash and baby Jack whose super powers are about to be discovered. Their mission is derailed, however, when a new villain emerges with a brilliant and dangerous plot that threatens everything. But the Parrs don\'t shy away from a challenge, especially with Frozone by their side.'),
(4, 'Jurassic World: Fallen Kingdom', 'It\'s been three years since theme park and luxury resort Jurassic World was destroyed by dinosaurs out of containment. Isla Nublar now sits abandoned by humans while the surviving dinosaurs fend for themselves in the jungles. When the island\'s dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event. Owen is driven to find Blue, his lead raptor who\'s still missing in the wild, and Claire has grown a respect for these creatures she now makes her mission. Arriving on the unstable island as lava begins raining down, their expedition uncovers a conspiracy that could return our entire planet to a perilous order not seen since prehistoric times.'),
(5, 'DEADPOOL 2', 'Wade Wilson, aka Deadpool, is back with his fiance Vanessa and still fighting crime, when a devastating attack brings him to the lowest point of his life. He finds himself at Professor Xavier\'s estate, where Colossus is trying to turn him into an X-Man. But instead, Deadpool gets involved with three mutants and they join forces to protect a child from the powerful Cable who is intent on killing him.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
