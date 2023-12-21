-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 21 Des 2023 pada 11.47
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `i27studio`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `nama_category` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `categories`
--

INSERT INTO `categories` (`id`, `nama_category`, `created_at`, `updated_at`) VALUES
(1, 'Commercial', '2023-11-29 20:16:16', '2023-11-29 20:16:16'),
(2, 'Gate', '2023-11-29 20:16:29', '2023-11-29 20:16:29'),
(3, 'Housing', '2023-11-29 20:16:34', '2023-11-29 20:16:34'),
(4, 'Facility', '2023-11-29 20:16:46', '2023-11-29 20:16:46'),
(5, 'Warehouse', '2023-11-29 20:17:03', '2023-11-29 20:17:03'),
(6, 'Park', '2023-11-29 20:17:59', '2023-11-29 20:17:59'),
(7, 'Site Map', '2023-11-30 08:36:26', '2023-11-30 08:36:26');

-- --------------------------------------------------------

--
-- Struktur dari tabel `clients`
--

CREATE TABLE `clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `nama_client` varchar(255) NOT NULL,
  `lokasi_client` varchar(255) NOT NULL,
  `logo_client` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `clients`
--

INSERT INTO `clients` (`id`, `nama_client`, `lokasi_client`, `logo_client`, `created_at`, `updated_at`) VALUES
(1, 'Kota Wisata Cibubur', 'Cibubur', 'hmhPcAVcTU7Lt788RIvD97xNFW6g2cmmgTQhayrb.webp', '2023-11-29 19:57:44', '2023-11-30 18:04:09'),
(2, 'Legenda Wisata', 'Cibubur', '7Xpi9scCODuKIxFfvcTzZYpZJYLUS5gWT4yHpA5M.webp', '2023-11-29 19:58:29', '2023-11-29 19:58:29'),
(3, 'Citraland Tegal', 'Tegal', 'wB2a887V7ZD1KpG26WZn1iRUu159G9XslPwRw0F4.webp', '2023-11-29 19:58:48', '2023-11-29 19:58:48'),
(4, 'Samanea Hill', 'Tangerang', 'uROcV9FdnLutpabv7540iHAwjHWczaQYTJvj3eKe.webp', '2023-11-29 19:59:22', '2023-11-29 19:59:22'),
(5, 'Citraland BSB City', 'Semarang', 'noi6JXQ5uEOa2FkY1UHI4B0sHLCqZd1LKV23Oe9j.webp', '2023-11-29 20:00:04', '2023-11-29 20:00:04'),
(6, 'Citraland Megah', 'Batam', 'v28YuOQr9Dms2wFQBYDd8wReJzNFzIEUMgrHOe37.webp', '2023-11-29 20:00:37', '2023-11-29 20:00:37'),
(7, 'Citra City', 'Bogor', 'hVTsTMq7P360j1ApFBY2prNejG9xv687cFHPlwYW.webp', '2023-11-29 20:02:03', '2023-11-29 20:03:28'),
(8, 'Citra Garden Malang', 'Malang', 's6kQi0Hts9RIAtMJlRjEtoYV2yTlPfNXwNegMWIg.webp', '2023-11-29 20:02:29', '2023-11-29 20:02:29'),
(9, 'Citra Garden City', 'Jakarta', 'msfOxB5HjesAEcdi9l0ryDbuOSc8n8ybiSqyrmPA.webp', '2023-11-29 20:02:57', '2023-11-29 20:10:13'),
(10, 'Citra Raya', 'Tangerang', 'EyMsGkkp9mYBZoOp9EgRwd2VgqFH03aDg9ESyoRl.webp', '2023-11-29 20:03:55', '2023-11-29 20:03:55'),
(11, 'de\' LORA', 'Tangerang', 'nGj9ruaUR1GgTwjtJRR7PtzRN13TbCcT7QDyG6lW.webp', '2023-11-29 20:04:43', '2023-11-29 20:04:43'),
(12, 'Citra Garden Serpong', 'Tangerang Selatan', 'A0FpJTs0jLkrSvLD77rPulpKVxz5KIDZRFua6mxi.webp', '2023-11-29 20:05:29', '2023-11-29 20:05:29'),
(13, 'Mitra Garden Kragilan', 'Serang', 'NxvLfXHMXesI8wdmNYw3y4g1RPJjjLQ4jx2NOhAc.webp', '2023-11-29 20:05:59', '2023-11-29 20:05:59'),
(14, 'Citra Lake', 'Depok', 'jDyOo73ABh1PMjFYluDHlk7IQ7KvjR4p53sgYbu9.webp', '2023-11-29 20:07:03', '2023-11-29 20:07:03'),
(15, 'Talaga Bestari', 'Tangerang', 'c5B7Xmecqal1NZKy5rKcShZFawfqbRim5aIom1Ha.webp', '2023-11-29 20:07:42', '2023-11-29 20:07:42'),
(16, 'Citraland Banjarmasin', 'Banjarmasin', 'zqPvjfEY95CjtMqH4ziJ0BAPC1Mf6aKSWIMbtXiD.webp', '2023-11-29 20:08:18', '2023-11-29 20:08:18'),
(17, 'BSA Land', 'Tangerang Selatan', '7C4TkiATRlQsbOCR5ZUsEOsM8OG6OddiAXgX1Uft.webp', '2023-11-29 20:08:42', '2023-11-29 20:08:42'),
(18, 'Citra Grand City', 'Palembang', 'koMY4xe8R1lQvZ1883JEVwAlILVfytIbLbAyT7U8.webp', '2023-11-29 20:09:05', '2023-11-29 20:10:20'),
(19, 'Citra Garden City Samarinda', 'Samarinda', 'Jpd9QdHOodCxJcXPaq6WJYlOOVtMUP3xlC7ZG2B3.webp', '2023-11-29 20:10:59', '2023-11-29 20:10:59'),
(20, 'Citraland Puri', 'Serang', 'VYjkuxbUAU3FacYbvCde4i1NZwOdKLOBa3QYOEgn.webp', '2023-11-29 20:11:34', '2023-11-29 20:11:34'),
(21, 'Mitra Kasih School', 'Banjarmasin', 'xep8q1yxHqr9xTd7BH0PxSIDpEwhpAnv7OCkwQp8.webp', '2023-11-29 20:12:34', '2023-11-29 20:12:34'),
(22, 'Paramount', 'Tangerang Selatan', '8dX2eKkV6jyblv7mhdwut9XCMwAwbYyitnMiZy5N.webp', '2023-11-29 20:12:53', '2023-11-29 20:12:53'),
(23, 'Sentraland Paradise', 'Tangerang', '9ceXG0fgLb3mRZ9BRB0aYprkMOgF5pY0AIDEgMmS.webp', '2023-11-29 20:13:31', '2023-11-29 20:13:31'),
(24, 'Batakan Village', 'Balikpapan', '9GY0kDNfb91XYbUcSAZvJGnc3FKaQ8UHdURjl6A8.webp', '2023-11-29 20:14:18', '2023-11-29 20:14:18'),
(25, 'Intiland', 'Jakarta', 'poyfou9wTXBplEdT4T9uMykwiUJH5xzXsycODTRl.webp', '2023-11-29 20:14:59', '2023-11-29 20:14:59'),
(26, 'Metland', 'Bogor', 'CpREJJZzCpSaALnpLZ2SYfPpw0EyBRGoTQODY3H5.webp', '2023-11-29 20:15:45', '2023-11-29 20:15:45'),
(27, 'Duta Indah', 'Tangerang', 'qJ025JiVvDRFiMqmaPZgWHFop0Zz8X9ESiFNLNyX.webp', '2023-11-30 08:21:00', '2023-11-30 08:21:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `employees`
--

CREATE TABLE `employees` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama` varchar(255) NOT NULL,
  `jabatan` varchar(255) NOT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `employees`
--

INSERT INTO `employees` (`id`, `nama`, `jabatan`, `foto`, `created_at`, `updated_at`) VALUES
(1, 'Umar Bijaksana', 'Principal', 'U0yKiqhPqnKUqAJKmPQPfdCrmNMzumjIH6JZZuK5.webp', '2023-12-01 18:45:07', '2023-12-06 15:45:52'),
(2, 'Retno Damayanti', 'CEO', '1FqCLNOiEAOlSPz5qlMAmNZJyLfgVLMLiPiNLKqR.webp', '2023-12-01 18:46:15', '2023-12-06 15:46:01'),
(3, 'Neneng Ratna', 'Manager', 'E0mMhZNLmQStrUQd6dKZ57U27OMDRS6HLgVIlnwx.webp', '2023-12-01 18:46:45', '2023-12-06 15:47:19'),
(4, 'Hanum Maagfirah', 'Architect', 'lbSXBGx14mTfGpJlK0x12JCqd2HUdzsORe9mx8i9.webp', '2023-12-01 18:48:05', '2023-12-06 15:48:21'),
(5, 'Erpin Rustiawandi', 'Architect', 'LOXqqo9KZudW9sAlw7JVi5Y8W4YWwuRHB7VgKgOZ.webp', '2023-12-01 18:48:25', '2023-12-06 15:48:36'),
(6, 'Audi', 'Architect', 's60uc0kxuRR1ksyza26YljyRHS7QqLdxuxWrMX2z.webp', '2023-12-01 18:48:43', '2023-12-06 15:48:50'),
(7, 'Maasun Maarif', 'Technical', 'dZ0fvhW1OKUqhXjo0BqAt2bfW7fle47SA0QQ0Gcr.webp', '2023-12-01 18:49:14', '2023-12-06 15:49:11'),
(8, 'Muhammad Thoriq Azyzy', 'Architect', 'vAGsH3excodPr4BtTd2Qd7Pmt0vwOdM9nXzyTCdT.webp', '2023-12-01 18:49:43', '2023-12-06 15:49:21'),
(9, 'Dewa', 'Drafter', '7FbPfjNfyVnl4pIVk8eXCRtC2tJH8fyuy4bEA3OB.webp', '2023-12-01 18:50:00', '2023-12-06 15:49:35'),
(10, 'M. Raihan', 'Document Controller', 'RVYNg98t20VsZCnQEWZoazesm9fboVJO3PGgwLHg.webp', '2023-12-01 18:50:26', '2023-12-06 15:49:50'),
(11, 'Fikri naufal', 'web developer', 'd81Tbiolwb542ivJhSpeQ8ul0u5ULrHtZ7hMjUkk.webp', '2023-12-06 20:03:37', '2023-12-06 20:03:37');

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(33, '2014_10_12_000000_create_users_table', 1),
(34, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(35, '2019_08_19_000000_create_failed_jobs_table', 1),
(36, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(37, '2023_11_08_095315_create_categories_table', 1),
(38, '2023_11_09_080404_create_clients_table', 1),
(39, '2023_11_09_080917_create_projects_table', 1),
(40, '2023_11_15_045639_create_employees_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama_project` varchar(255) NOT NULL,
  `gambar_project` varchar(255) DEFAULT NULL,
  `id_client` int(10) UNSIGNED NOT NULL,
  `id_category` int(10) UNSIGNED NOT NULL,
  `is_highlight` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `projects`
--

INSERT INTO `projects` (`id`, `nama_project`, `gambar_project`, `id_client`, `id_category`, `is_highlight`, `created_at`, `updated_at`) VALUES
(1, 'Townhouse', 'v55FUoKqydv0cMWaATXqjaCX3hZKfI5OttL93fCd.webp', 22, 3, 0, '2023-11-29 20:23:26', '2023-11-30 09:04:03'),
(2, 'Matera', 'ppiUhypzApbenY7HHAJFwKZ2mZnOwkn24o0PDAHy.webp', 22, 3, 0, '2023-11-29 20:25:13', '2023-12-06 20:05:27'),
(3, 'Boston', 'Bcz7poslzpwBcKgC3aYuDFLilQ8HbSaLDkzaAxhO.webp', 22, 3, 0, '2023-11-29 20:25:40', '2023-12-06 20:05:28'),
(4, 'Lausanne', '6KUDA9LXVfX280n9VtuQod3E2SxeIOzBXSHlJWpF.webp', 22, 3, 0, '2023-11-29 20:26:28', '2023-11-30 09:04:04'),
(5, 'Malibu Village', '8Ao3Oil7mIuP5n1Q1uIc1I1Z1UZ0Pifp9OjjDHya.webp', 22, 3, 0, '2023-11-29 20:27:12', '2023-11-30 09:04:05'),
(6, 'Omaha Square', 'DLzWUdgS2jmKxl9rapPRlR87pM9WOMz0GRSBQjbG.webp', 22, 1, 0, '2023-11-29 20:27:36', '2023-11-30 08:56:43'),
(7, 'Main Gate', 'rcBpCX9gpME9OxQStpkIKak2SXql4HUPdZDmRZEt.webp', 11, 2, 0, '2023-11-29 20:30:29', '2023-11-30 08:56:26'),
(8, 'Club House', '6HsQp00XG9nrfvR783frhR7Ehv3Yla6cyVFRAMrh.webp', 11, 4, 0, '2023-11-29 20:31:19', '2023-11-29 20:34:28'),
(9, 'Main Park', 'tvSWm1W38g31lmOc02P0vLib5O0N3xcgm3PStaQs.webp', 11, 6, 0, '2023-11-29 20:31:55', '2023-11-30 08:56:25'),
(10, 'Cluster Gate', 'FVyebXNWd6OSaw1WTGNhBwLVL8IuLJ8q3fbrgFMk.webp', 11, 2, 0, '2023-11-29 20:32:25', '2023-11-30 08:51:47'),
(11, 'Cluster Park', 'OIE3UuHow8lEjNMIi1zJyixPwpGDLTAmU2haAdc5.webp', 11, 6, 0, '2023-11-29 20:33:02', '2023-11-29 20:33:02'),
(12, 'Mississippi Gate', '9CAO1B1eZOhg8DZ0Bk9XT2a2vRCynz6LsWyuWn9p.webp', 1, 2, 0, '2023-11-29 20:37:28', '2023-11-29 20:37:28'),
(13, 'Mississippi Park', '55dLJefxRAIQRfHFTynEzGQqsQLw2OXh6Smgz8BV.webp', 1, 6, 0, '2023-11-29 20:38:06', '2023-11-30 08:51:51'),
(14, 'Mississippi House', '8dJKDnC8k7d7rS4M8C1GQc40Gdp3Oi5lyORAvePM.webp', 1, 3, 0, '2023-11-29 20:38:28', '2023-11-30 08:51:52'),
(15, 'Atherton Gate', 'akPramM3TfCjtXhR04NFTWp2yWKkaxtxJiivQubG.webp', 1, 2, 0, '2023-11-29 20:39:35', '2023-11-29 20:39:35'),
(16, 'Atherton L.10', 'tw5FojiVgs93LCG5IKXBO2ZuhDjOXT1LkD7P0MwC.webp', 1, 3, 0, '2023-11-29 20:39:58', '2023-11-29 20:39:58'),
(17, 'Bellwood Gate', '8WxqSdPZHczXOtNUvpgSYINF16YWYoanKlhHVWqS.webp', 1, 2, 0, '2023-11-29 20:40:44', '2023-11-29 20:40:44'),
(18, 'Bellwood House', '8vdlnm4StOatxT8I3n9IoHEIWDm7NMCtPlhGa9zv.webp', 1, 3, 0, '2023-11-29 20:41:03', '2023-11-29 20:41:03'),
(19, 'Nashville Gate', 'cW7H1UhxbQet46c6l4tDjMIiNIoM6MMt8fY9LYY5.webp', 1, 2, 0, '2023-11-29 20:41:58', '2023-11-29 20:41:58'),
(20, 'Nashville House', '0Iu9XDfFKlDlW47Ufe25iqMiYCZ8ihrZG7uSEgmC.webp', 1, 3, 0, '2023-11-29 20:42:18', '2023-11-29 20:42:18'),
(21, 'Vermont Gate', 'Tj7dwRlUCudpMrPjm6AqgkEnnmgqWV1muQX8REFG.webp', 1, 2, 0, '2023-11-29 20:43:10', '2023-11-29 20:43:10'),
(22, 'Vermont House', 'JkgI9G8Z4rxihKleXznPEl1gkdhd84ps5kSFWVir.webp', 1, 3, 0, '2023-11-29 20:45:59', '2023-11-29 20:45:59'),
(23, 'Vermont Park', 'bOrC30NpMXJi0v5TczMSPmdb813O3wPKC57GmEKQ.webp', 1, 6, 0, '2023-11-29 20:46:14', '2023-11-29 20:46:14'),
(24, 'Ruko Alila', '7gSjNqexjuKxm3Uq9R4ZPbmz6zfxNJ2t9kVQimi1.webp', 20, 1, 0, '2023-11-29 20:48:25', '2023-11-29 20:48:25'),
(25, 'Ruko Belleza', 'qZJLsCaIaiuoIw2iwUjLCPJpVN43cy04aoixhH2L.webp', 20, 1, 0, '2023-11-29 20:48:55', '2023-11-29 20:48:55'),
(26, 'Refacade L.5', 'gRFdmVtyf1oJFqoHaCk4X4NYFadQSNTk5GWZEQkL.webp', 20, 3, 0, '2023-11-29 20:49:45', '2023-11-29 20:49:45'),
(27, 'Refacade L.7', '8kTrEN5oIoaQYMlbgv0vfpgj5ZcRZOnwgj8yL6HR.webp', 20, 3, 0, '2023-11-29 20:50:20', '2023-11-29 20:50:40'),
(28, 'Refacade L.8', '2FfKZioq6KxMgg7jjf72CXbu69nAk701qhFIZ7EG.webp', 20, 3, 0, '2023-11-29 20:50:53', '2023-11-29 20:50:53'),
(29, 'Refacade L.9', 'mxz3r4OzkIUHWobOqpgen9ID0LxyUg0W2VuJt5wW.webp', 20, 3, 0, '2023-11-29 20:51:14', '2023-11-29 20:51:14'),
(30, 'Crimson L.10', 'eRqfy3YHdBvcQzsXgih1CtQRSbB8G3C1e66MXuhn.webp', 20, 3, 0, '2023-11-29 20:52:14', '2023-11-29 20:52:14'),
(31, 'Citra Megah L.7', 'jVO02sDmKi1675shdNo8xKfhRYVAJJKFGNHdK1cM.webp', 6, 3, 0, '2023-11-30 08:18:24', '2023-11-30 08:18:24'),
(32, 'Citra Megah L.8', '7inoVit504vNPVY0ZrRsqu78H6zYekTciaEYWtFL.webp', 6, 3, 0, '2023-11-30 08:18:47', '2023-11-30 08:18:47'),
(33, 'Citra Megah L.10', 'VuwnqMVmoLNhYdt6OzKDi2mcB0RQ0gMluTl2vACe.webp', 6, 3, 0, '2023-11-30 08:19:20', '2023-11-30 08:19:20'),
(34, 'Osaka Hills L.8', 'nem7TOaTFEKJBfTIUZvOGPZ0HNeIFqG2gWVXxsGa.webp', 6, 3, 0, '2023-11-30 08:19:40', '2023-11-30 08:19:40'),
(35, 'Duta Indah L.6', 'XDpjq5ZM0iCq4QfcdtKK2SfaxAAECtFkxRlsx167.webp', 27, 3, 0, '2023-11-30 08:21:38', '2023-11-30 08:21:38'),
(36, 'Duta Indah L.4', 'eGHtuiVGgFXf0jtFg6YQ4m3S7KdoGbtvJTnN5gLX.webp', 27, 3, 0, '2023-11-30 08:22:01', '2023-11-30 08:22:01'),
(37, 'Dolomite', 'YKsv3RlNBfCni4c0IpVNCITzRg2crR74NKDFOEgf.webp', 27, 1, 0, '2023-11-30 08:22:22', '2023-11-30 08:22:34'),
(38, 'Palm Spring Park', 'dyqYuoxgk4OHUuRW6BX6Z1n3YNbSSwPi1AGWuTjx.webp', 17, 6, 0, '2023-11-30 08:24:52', '2023-11-30 08:24:52'),
(39, 'Palm Spring Gate', 'cXrw7c6jnV7Iyxb3Yl8KtGuVQDFlJA3hIIl2H2y2.webp', 17, 2, 0, '2023-11-30 08:25:14', '2023-11-30 08:25:14'),
(40, 'Sentul Golf Klasik', 'nP7ASjlSho4jiI3HzBQyOArD6AZkBAq1hZ6hO6IP.webp', 7, 3, 0, '2023-11-30 08:26:36', '2023-11-30 08:26:36'),
(41, 'Sentul Golf Modern', '7Rk4rLfZMywxloKHLdWAOjtLj2BThx3lTb862W6n.webp', 7, 3, 0, '2023-11-30 08:26:57', '2023-11-30 08:26:57'),
(42, 'Citra City House 1', 'aJYFgP8J8u4CWns5A7kHvoiTZvPlFrUg6jOVdHVG.webp', 7, 3, 0, '2023-11-30 08:28:05', '2023-11-30 08:28:05'),
(43, 'Citra City L.8', 'pDwhg2nPGFbNvzSCx5RDKBpsf2il2RnGqHK0y28M.webp', 7, 3, 0, '2023-11-30 08:28:46', '2023-11-30 08:28:46'),
(44, 'Citra City L.7', 'RjSXDXcBJ1ZYA4ERK0mbCEqcwhakO2KlItOY4Cl0.webp', 7, 3, 0, '2023-11-30 08:29:20', '2023-11-30 08:29:20'),
(45, 'Site Map Block F & G', 'WNzAiAujJscSygXD451LwUWcFQhMREGFi3BcZlbg.webp', 9, 7, 0, '2023-11-30 08:37:46', '2023-11-30 08:37:46'),
(46, 'Block FG Citra 8', 'VTnj17nQCs0bzliRnqXoxE1s11HrabY5GSFzpmU3.webp', 9, 1, 0, '2023-11-30 08:38:25', '2023-11-30 08:38:25'),
(47, 'Cluster Lavia Gate', 'ACBJYiKUqlatpw4qFx4IOH03B5yhMhi3E1aq2WJM.webp', 9, 2, 0, '2023-11-30 08:40:16', '2023-11-30 08:40:16'),
(48, 'Club House Citra Garden', 'LtVFYLjkuDkZX6QW0n9ToM5vJPSUj7SzSJetp3fd.webp', 9, 4, 0, '2023-11-30 08:40:43', '2023-11-30 08:40:43'),
(49, 'Citra Garden L.5', 'dWIQBlWv2VX0dmqkBeXY5bMyqdSwITdkIsPAPJit.webp', 9, 3, 0, '2023-11-30 08:41:28', '2023-11-30 08:41:28'),
(50, 'Citra Garden L.6', 'I7CArHeio0k4IM4CfiWkuv1v1h4GhdDMjyW4It9B.webp', 9, 3, 0, '2023-11-30 08:41:54', '2023-11-30 08:41:54'),
(51, 'Citra Garden L.7', 'LaX9Pc1Yn8bRzUPM56lSVWhtRT9i7HLodIG5unRL.webp', 9, 3, 0, '2023-11-30 08:42:15', '2023-11-30 08:42:15'),
(52, 'Citra Garden L.8', 'zWwPb7QATnR3PqbKNfkDoL9eKvhaZo9K5WAxajTM.webp', 9, 3, 0, '2023-11-30 08:42:32', '2023-11-30 08:42:32'),
(53, 'Citra 6', 'IZt9FoqKonkqCg80ZkHJQNB8gdi8zNsOt5xX1hNi.webp', 9, 1, 0, '2023-11-30 08:42:59', '2023-11-30 08:42:59'),
(54, 'Citra 8', 'klZHzf9beKUtkIUXyUURSd8bu1VjxILUfOtiE3gO.webp', 9, 1, 0, '2023-11-30 08:43:30', '2023-11-30 08:43:30'),
(55, 'Citra 8', 'i3pe8RO7eG3nF1c6jBec9mTFWs9jt5MM6y9pzaHW.webp', 9, 1, 0, '2023-11-30 08:43:55', '2023-11-30 08:43:55'),
(56, 'Citra 8', 'izydNdsXTCIaDNojvKz85aDC5DSu6VFEWXqPHTc2.webp', 9, 1, 0, '2023-11-30 08:44:08', '2023-11-30 08:44:08'),
(57, 'Aeropolis', 'gDGEnyzxhaSZybo8RG9Jf5rSRCJhg5DzzEVGYLWD.webp', 9, 5, 0, '2023-11-30 08:44:41', '2023-11-30 08:44:41'),
(58, 'Kios & Ruko', 'zV3sKtPaL54AdgrYNNr4ebZWowg8YvO6gpsYLweM.webp', 13, 1, 0, '2023-11-30 08:45:58', '2023-11-30 08:45:58'),
(59, 'Ruko', 'niVqSJ3HYdi9ZV8lNeQZRM5ukLTiJVMBGSFiOW04.webp', 13, 1, 0, '2023-11-30 08:46:24', '2023-11-30 08:46:24'),
(60, 'Main Gate Mitra Garden', 'dXg51I4mM7d41MCgqk1MPQBQo4BUdJ6SkCCV9QxB.webp', 13, 2, 0, '2023-11-30 08:46:57', '2023-11-30 08:46:57'),
(61, 'Mitra Garden Park', 'Xe6QCKvUrlJAGX4uhX3JPdQWLIxERfbVAiwgksAz.webp', 13, 6, 0, '2023-11-30 08:47:23', '2023-11-30 08:47:23'),
(62, 'Rumah Bahagia', '3lCC6lJftDe8hvbefIBI9nHADob0slKOfRE2omiH.webp', 13, 3, 0, '2023-11-30 08:47:51', '2023-11-30 08:51:57'),
(63, 'Rumah Sejahtera', 'BQ61w4yc3Mf37i0hv6eroe3mlEgYJbGEgCmdW1gR.webp', 13, 3, 0, '2023-11-30 08:48:12', '2023-11-30 08:51:58'),
(64, 'The Trees', '8Q1OduPSZMUZIFoWCSap3yrUlCfTn5SBAYFZoW9x.webp', 10, 3, NULL, '2023-11-30 09:08:11', '2023-11-30 09:08:11'),
(65, 'Japan Style', 'tazfnkZHR2t1HCnHsdhlErAB3mfzXRoC7M8n1QzF.webp', 10, 3, NULL, '2023-11-30 09:08:30', '2023-11-30 09:08:30'),
(66, 'Varenna', '3AJubiM0RYvYBlQ6J1qJB8tAeyvEXwv0vvoGbLXg.webp', 10, 3, NULL, '2023-11-30 09:08:47', '2023-11-30 09:08:47'),
(67, 'Cluster Villagio', '0a9RJjass74QUOuRs6gS30y8dhu7UBFd37cvqaFJ.webp', 10, 3, NULL, '2023-11-30 09:09:37', '2023-11-30 09:09:37'),
(68, 'Cluster Fountain', 'IbIhchGiPGQfwds8ejSHV1uNuAeR2DvD9i0YebhB.webp', 10, 3, NULL, '2023-11-30 09:11:06', '2023-11-30 09:11:06'),
(69, 'Ruko', 'Zl9NRmXoDpKdDXg4IlDXnQ1cncpLMBH5eptOIpNe.webp', 10, 1, NULL, '2023-11-30 09:11:47', '2023-11-30 09:11:47'),
(70, 'Ruko Maisonette', 'iVOEujMkNwWG4hsrMOB8RvLlOdl8nxJ1ZtUYNKRX.webp', 10, 1, NULL, '2023-11-30 09:12:12', '2023-11-30 09:12:12'),
(71, 'Ruko Kozko', 'ucvDpLZ1l8gD0oo9cjO5gozvFrXSZvDFcrtU5zRQ.webp', 10, 1, NULL, '2023-11-30 09:12:29', '2023-11-30 09:12:29'),
(72, 'The Spring Main Gate', 'OCeIm03o6LmuFIH8D5BTNNbrTetg21TfOu1HnTr3.webp', 10, 2, NULL, '2023-11-30 09:12:57', '2023-11-30 09:12:57'),
(73, 'The Spring', 'Fdc5pZqf0v0r1Bff0B5BdadCVZ4DxOL1D91hgmaj.webp', 10, 3, NULL, '2023-11-30 09:13:16', '2023-11-30 09:13:16');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Dafa', 'dafa@gmail.com', NULL, '$2y$12$xZmKmcMOPbcRFOHLtcPsHOwJsm.MrKbqMFK/EbszaVCbt3p/70nN6', NULL, '2023-11-29 19:56:45', '2023-11-29 19:56:45');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeks untuk tabel `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projects_id_category_foreign` (`id_category`),
  ADD KEY `projects_id_client_foreign` (`id_client`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT untuk tabel `employees`
--
ALTER TABLE `employees`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_id_category_foreign` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `projects_id_client_foreign` FOREIGN KEY (`id_client`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
