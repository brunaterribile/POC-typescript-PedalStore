--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: pedals; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pedals (
    id integer NOT NULL,
    model text NOT NULL,
    brand text NOT NULL,
    value integer NOT NULL
);


ALTER TABLE public.pedals OWNER TO postgres;

--
-- Name: pedals_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pedals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pedals_id_seq OWNER TO postgres;

--
-- Name: pedals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pedals_id_seq OWNED BY public.pedals.id;


--
-- Name: sales; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sales (
    pedal_id integer NOT NULL,
    sale_date date DEFAULT now() NOT NULL,
    customer text NOT NULL
);


ALTER TABLE public.sales OWNER TO postgres;

--
-- Name: stock; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stock (
    pedal_id integer NOT NULL,
    quantity integer NOT NULL
);


ALTER TABLE public.stock OWNER TO postgres;

--
-- Name: pedals id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedals ALTER COLUMN id SET DEFAULT nextval('public.pedals_id_seq'::regclass);


--
-- Data for Name: pedals; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pedals (id, model, brand, value) FROM stdin;
4	Tube Screamer TS-9	Ibanez	100
5	Morning Glory V4	JHS Pedals	200
6	HX Stomp	Line 6	600
\.


--
-- Data for Name: sales; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sales (pedal_id, sale_date, customer) FROM stdin;
5	2023-01-23	Ronaldo Camargo
5	2023-01-23	Pedro Garcia
4	2023-01-23	Willian Souza
6	2023-01-23	Lucas Silveira
\.


--
-- Data for Name: stock; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.stock (pedal_id, quantity) FROM stdin;
4	8
5	12
6	8
\.


--
-- Name: pedals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pedals_id_seq', 6, true);


--
-- Name: pedals pedals_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedals
    ADD CONSTRAINT pedals_pk PRIMARY KEY (id);


--
-- Name: sales sales_pedal_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_pedal_id_fkey FOREIGN KEY (pedal_id) REFERENCES public.pedals(id);


--
-- Name: stock stock_pedal_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stock
    ADD CONSTRAINT stock_pedal_id_fkey FOREIGN KEY (pedal_id) REFERENCES public.pedals(id);


--
-- PostgreSQL database dump complete
--

