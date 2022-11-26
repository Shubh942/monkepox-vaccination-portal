-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2022 at 04:57 AM
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
-- Database: `monkeypox`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`username`, `password`) VALUES
('utkarsh', '123');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `username` varchar(255) NOT NULL,
  `aadhar` int(12) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`username`, `aadhar`, `password`) VALUES
('rajutkarsh2505@gmail.com', 123, '123'),
('sigma_male', 2432312, 'alpha'),
('user', 534, 'qwe'),
('utkarsh', 123, 'qwe'),
('utkarshraj', 112233445, '12345'),
('utkarsh_raj.random', 54234524, 'qwerty'),
('utkarsh_raj_13', 1231, '123');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `name` varchar(255) NOT NULL,
  `age` int(10) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `aadhar` int(12) NOT NULL,
  `date` date NOT NULL,
  `hospital` varchar(255) NOT NULL,
  `vaccine` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`name`, `age`, `sex`, `aadhar`, `date`, `hospital`, `vaccine`) VALUES
('sigma', 23, 'Male', 32452, '2022-11-28', 'City Hospital and Research Center', 'Imvanex'),
('Utkarsh  Raj', 54, 'Male', 53242, '2022-12-11', 'City Hospital and Research Center', 'ACAM2000'),
('Utkarsh  Raj', 34, 'Male', 243143, '2022-11-29', 'Jabalpur Hospital Research Centre', 'ACAM2000'),
('sigma', 33, 'Male', 432413, '2022-11-29', 'Triveni Health Care', 'ACAM2000'),
('soham', 42, 'Female', 525233, '2022-11-29', 'Jabalpur Hospital Research Centre', 'Imvamune'),
('utk', 23, 'Male', 532345, '2022-12-08', 'Marble City Hospital', 'JYNNEOS'),
('fjwhkad', 34, 'Male', 546653, '2022-11-28', 'Triveni Health Care', 'Imvamune'),
('random', 34, 'None', 4213531, '2022-11-28', 'Jabalpur Hospital Research Centre', 'ACAM2000'),
('rsfyhgrxf', 20, 'Male', 4532542, '2022-11-28', 'Triveni Health Care', 'ACAM2000'),
('qwe', 32, 'Female', 35224352, '2022-12-08', 'Triveni Health Care', 'Imvanex'),
('somil', 99, 'Female', 42313421, '2022-11-29', 'Jabalpur Hospital Research Centre', 'ACAM2000'),
('sigma', 45, 'Male', 65563424, '2022-12-07', 'Marble City Hospital', 'JYNNEOS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`aadhar`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
