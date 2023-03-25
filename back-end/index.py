import crud
import database as db
from flask import Flask, request
from datetime import datetime

app = Flask(__name__)

@app.route('/newproduct', methods=['POST'])
def newproduct():
    productcode = request.form.get('productcode')
    productname = request.form.get('productname')
    productweight = request.form.get('productweight')
    productdatetime = datetime.now()
    data=(productcode,productname,productdatetime ,productweight)

    if isinstance(crud.create_product(data), int):
        return 'success'
    else :
        return 'field'
        
                  

@app.route('/getproducts')
def getproducts():
    return crud.get_products()




if __name__ == "__main__" :
    db.create_tables()
    app.run(debug=True,port=5000)

