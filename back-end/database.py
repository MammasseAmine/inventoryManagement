import sqlite3
from sqlite3 import Error
import os
from pathlib import Path

def create_connection():
    root = os.path.dirname(os.path.realpath(__file__))
    database = os.path.join(root, 'invmgm.db')
    mydb = Path(root + "/invmgm.db")

    dbconn = None

    try:
        dbconn = sqlite3.connect(database)
    except Error as e :
        print(e)
    
    if mydb.exists() :
        print("Database created and existes")
        return dbconn
    else:
        return dbconn

def creat_table(connection, create_table_sql):
    try:
        conn = connection.cursor()
        conn.execute(create_table_sql)
    except Error as e : 
        print(e)

def create_tables() :
    sql_products_table = """CREATE TABLE IF NOT EXISTS products(
    id integer PRIMARY KEY AUTOINCREMENT,
    productcode text NOT NULL,
    productname text NOT NULL,
    datetime text NOT NULL,
    productweight text NOT NULL
    )"""

    sql_customers_table = """CREATE TABLE IF NOT EXISTS customers(
    id integer PRIMARY KEY,
    customercode text NOT NULL,
    customername text NOT NULL,
    datetime text NOT NULL,
    location text NOT NULL
    )"""

    sql_suppliers_table = """CREATE TABLE IF NOT EXISTS suppliers(
    id integer PRIMARY KEY,
    suppliercode text NOT NULL,
    suppliername text NOT NULL,
    datetime text NOT NULL,
    location text NOT NULL
    )"""
    
    creat_table(create_connection(), sql_products_table)
    creat_table(create_connection(), sql_customers_table)
    creat_table(create_connection(), sql_suppliers_table)