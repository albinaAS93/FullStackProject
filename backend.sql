-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 18, 2022 at 03:50 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `backend`
--

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `name`) VALUES
(1, 'Rome'),
(3, 'Paris'),
(5, 'Chicago'),
(6, 'Bruxelles'),
(7, 'Amsterdam'),
(8, 'Berlin'),
(9, 'Mosca'),
(10, 'Zurich'),
(11, 'Madrid'),
(12, 'Barcelona'),
(13, 'Dublin'),
(14, 'New York'),
(15, 'Las vegas'),
(16, 'London'),
(17, 'Milan'),
(18, 'Rotterdam'),
(19, 'Mykonos'),
(20, 'Ibiza'),
(21, 'Sofia'),
(22, 'Minsk');

-- --------------------------------------------------------

--
-- Table structure for table `flights`
--

CREATE TABLE `flights` (
  `id` int(11) NOT NULL,
  `departure` int(11) NOT NULL,
  `arrival` int(11) NOT NULL,
  `availableSeats` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `flights`
--

INSERT INTO `flights` (`id`, `departure`, `arrival`, `availableSeats`) VALUES
(13, 5, 6, 70),
(14, 5, 3, 75),
(21, 8, 12, 100),
(24, 16, 17, 99),
(61, 1, 3, 54),
(67, 1, 18, 120),
(68, 6, 11, 89);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `name` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`name`, `username`, `password`) VALUES
('test2', 'test2@test.com', 'test2'),
('test3', 'test3@gmail.com', 'test3'),
('test4', 'test4@gmail.com', 'test4'),
('test5', 'test5@gmail.com', 'test5'),
('test', 'test@test.it', 'test1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flights`
--
ALTER TABLE `flights`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `flights`
--
ALTER TABLE `flights`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
