from flask import Flask

app = Flask( __name__ )

@app.route( "/contacts", methods = [ "GET" ] )
def getContacts():
    return "Hola"


# https://localhost:5000/contacts
# https://localhost:5000/contacts/1
