Follow me on Instagram for more projects! [@neyth_makes](http://instagram.com/neyth_makes/)

## Installation instructions 

Run these commands in terminal, git clone in the directory you want to install in

```console
sudo apt-get update
sudo apt-get install git
sudo apt-get install python3-pip
install django
install django-webpack-loader
install pexpect

git clone https://github.com/zcqsntr/LED_paint --recursive


```

## Usage instructions

to run the webapp on a local device (recommended):

```console
cd backend 
python3 manage.py runserver 0.0.0.0:8000
```

then open your Pis IP address in a browser, alternatively you can use the address raspberrypi.local:8000

to run on the webapp on the raspberry pi (may be laggy):
```console
cd backend 
python3 manage.py runserver 
```
then open the address it spits out in the console in the browser on your Pi


## Misc
npm run dev
python3 manage.py runserver
https://dev.to/zachtylr21/how-to-serve-a-react-single-page-app-with-django-1a1l
