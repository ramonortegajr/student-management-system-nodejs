-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2024 at 11:17 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sms_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_account`
--

CREATE TABLE `tb_account` (
  `id` int(11) NOT NULL,
  `account_name` varchar(30) NOT NULL,
  `account_username` varchar(20) NOT NULL,
  `account_password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_account`
--

INSERT INTO `tb_account` (`id`, `account_name`, `account_username`, `account_password`) VALUES
(1, 'Ram Ortega', 'ramram', 'ram123'),
(2, 'Jane Mia Ann Vallejos', 'mia', 'mia123'),
(3, 'Gwen Padillo', 'gwenny', 'gwen123');

-- --------------------------------------------------------

--
-- Table structure for table `tb_student`
--

CREATE TABLE `tb_student` (
  `student_id` int(11) NOT NULL,
  `student_firstname` varchar(40) NOT NULL,
  `student_middlename` varchar(30) NOT NULL,
  `student_lastname` varchar(30) NOT NULL,
  `student_birth` varchar(20) NOT NULL,
  `student_gender` varchar(20) NOT NULL,
  `student_nationality` varchar(40) NOT NULL,
  `student_phone` varchar(20) NOT NULL,
  `student_email` varchar(30) NOT NULL,
  `student_address` varchar(50) NOT NULL,
  `student_guardian` varchar(30) NOT NULL,
  `student_guardian_contact` varchar(30) NOT NULL,
  `student_guardian_relation` varchar(30) NOT NULL,
  `student_previous_school` varchar(30) NOT NULL,
  `student_year_graduate` varchar(30) NOT NULL,
  `student_academics` varchar(30) NOT NULL,
  `student_interest` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_student`
--

INSERT INTO `tb_student` (`student_id`, `student_firstname`, `student_middlename`, `student_lastname`, `student_birth`, `student_gender`, `student_nationality`, `student_phone`, `student_email`, `student_address`, `student_guardian`, `student_guardian_contact`, `student_guardian_relation`, `student_previous_school`, `student_year_graduate`, `student_academics`, `student_interest`) VALUES
(22, 'Ram', 'Ocsin', 'Ortega', '2024-04-09', 'Male', 'Filipino', '09518767704', 'ramonortegajr1997@gmail.com', 'Cebu City', 'Sherlita Ortega', '09518723232', 'Mother', 'Bohol Island State University ', '2021', 'None', 'Programming'),
(23, 'John', 'Dy', 'Doe', '1997-03-07', 'Male', 'American', '09273827323', 'johndoe@gmail.com', 'United States of America', 'John Doe Sr.', '09323232323', 'Father', 'Hardvard University ', '2018', 'None', 'Coding'),
(24, 'Jane', 'Dy', 'Doe', '1994-02-01', 'Female', 'American', '09572928282', 'janedoe@gmail.com', 'Texas City', 'Junely Dy Doe', '09518723232', 'Mother', 'Hardvard University ', '2015', 'None', 'Volleyball'),
(25, 'Nathan', 'Dion', 'Drake', '1979-12-31', 'Male', 'American', '09572928282', 'nathandrake@gmail.com', 'Manhover, Texas', 'Lolita Drake', '092882738273', 'Mother', 'Bohol Island State University ', '2015', 'None', 'Programming'),
(26, 'Joel', 'Sean', 'Miller ', '2002-01-28', 'Male', 'Filipino', '09572928282', 'joelmiller@gmail.com', 'Kentuky', 'Jille Miller', '09518723232', 'Mother', 'Bohol Island State University ', '1990', 'None', 'Killings'),
(27, 'Jenny', 'Park', 'Kim', '1995-09-06', 'Female', 'Korean', '09518767704', 'jennykim@gmail.com', 'Seoul, Korea', 'Jenna Kim Yeung', '0387227332', 'Mother', 'Korea National High School', '2019', 'Magna Cum Laude', 'Singing'),
(28, 'John', 'Nate', 'Morisson', '1991-06-06', 'Male', 'American', '090-000-0121', 'johnmorisson@gmail.com', 'Manhover, Texas', 'Lolita Nate', '09518723232', 'Mother', 'Bohol Island State University ', '2012', 'None', 'Boxing');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_account`
--
ALTER TABLE `tb_account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_student`
--
ALTER TABLE `tb_student`
  ADD PRIMARY KEY (`student_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_account`
--
ALTER TABLE `tb_account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tb_student`
--
ALTER TABLE `tb_student`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
