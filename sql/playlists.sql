-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2017 at 08:49 PM
-- Server version: 10.1.22-MariaDB
-- PHP Version: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `playlist`
--

-- --------------------------------------------------------

--
-- Table structure for table `playlists`
--

CREATE TABLE `playlists` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET hp8 COLLATE hp8_bin NOT NULL,
  `image` varchar(1000) CHARACTER SET hp8 COLLATE hp8_bin NOT NULL,
  `songs` text CHARACTER SET hp8 COLLATE hp8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `playlists`
--

INSERT INTO `playlists` (`id`, `name`, `image`, `songs`) VALUES
(1, 'Hayehudim', 'http://media.shironet.mako.co.il/media/performers/heb/0/341/profile/341_t152.jpg', '[{\"url\":\"music\\/Hayehudim\\/Ezlech Baolam.mp3\",\"name\":\"Ezlech Baolam\"},{\"url\":\"music\\/Hayehudim\\/Hazman Shelach.mp3\",\"name\":\"Hazman Shelach\"},{\"url\":\"music\\/Hayehudim\\/Lo Kal.mp3\",\"name\":\"Lo Kal\"}]'),
(2, 'Amir Dadon', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsIz2hqn1AQVLJLY0EJCVfn_mXmqF1Ta6Ai93R-K3JcMcEtZj3Tqzc1Si', '[{\"name\":\"Or Gadol\",\"url\":\"music\\/Amir Dadon\\/Or Gadol.mp3\"}]'),
(3, 'Adele', 'https://i.ytimg.com/vi/GY6wZc6ahrA/hqdefault.jpg?sqp=-oaymwEWCMQBEG5IWvKriqkDCQgBFQAAhkIYAQ==&rs=AOn4CLCTZRRG6zX9X-bohari_oD5XCIERw', '[{\"url\":\"music\\/Adele\\/Hello.mp3\",\"name\":\"Hello\"}]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `playlists`
--
ALTER TABLE `playlists`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `playlists`
--
ALTER TABLE `playlists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
