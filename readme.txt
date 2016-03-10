####################################
                SETUP
####################################

#1 install NodeJs

#2 Navigate to the project ROOT folder i.e (\BlogSystem)

#3 Inside the ROOT folder i.e (\BlogSystem) folder open cmd and type:
node -v

if you get the node version everything is fine!
else you have to google: "how to add NodeJs to your PATH?"

#4 Type npm install

#NOTICE#
	If you get error(s) that any module is missing, just check the name of the module
    which is missing (displayed in your command - line error log/line) and install it by typing:

	npm install {moduleName}
	example: npm install gulp where gulp is {moduleName}
#END OF NOTICE#

####################################
            COMMANDS
####################################

#TO START AUTO COMPILER:
gulp watch-site

#TO EXIT FROM GULP:
ctrl + c;

#TO COMPILE SITE WITHOUT AUTO COMPILE:
gulp compile-site

#####################################
DONE
#####################################
NOW when you write js/sass and press CTRL+S to save your work
your opened CMD must start log messages that gulp is compiling your files [success/fail].

#####################################
NOTICE
#####################################
Whenever you start to coding, you have to open cmd at project ROOT and to type:
gulp watch-site