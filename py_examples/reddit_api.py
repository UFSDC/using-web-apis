import sys, requests, json

#shorten calling command line arguments
args = sys.argv

#only access the api when we're given a commandline arg
if len(sys.argv)==2:
    #the url we're requesting from with the commandline arg put in
    url = "http://www.reddit.com/user/"+str(args[1])+"/comments/.json"

    #specify your user-agent to get more leniency with the api
    headers = {
	'User-Agent':'Mememe',
	'From':'andrewjvora@gmail.com'
    }
    
    #use the requests library to send a get request
    r = requests.get(url, headers=headers)
    
    #print the response text
    parsed = json.loads(r.text)
    print json.dumps(parsed, indent=4, sort_keys=True)
else:
   #tell them their mistake
    print "Soz. Bad number of args."

