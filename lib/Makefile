CFLAGS=-Wall -O3 -g -Wextra -Wno-unused-parameter
CXX = g++
CXXFLAGS=$(CFLAGS)
OBJECTS=main_menu.o include.o
BINARIES=main_menu include

# Where our library resides. You mostly only need to change the
# RGB_LIB_DISTRIBUTION, this is where the library is checked out.
RGB_LIB_DISTRIBUTION=../rpi-rgb-led-matrix
RGB_INCDIR=$(RGB_LIB_DISTRIBUTION)/include
RGB_LIBDIR=$(RGB_LIB_DISTRIBUTION)/lib
RGB_LIBRARY_NAME=rgbmatrix
RGB_LIBRARY=$(RGB_LIBDIR)/lib$(RGB_LIBRARY_NAME).a
LDFLAGS+=-L$(RGB_LIBDIR) -l$(RGB_LIBRARY_NAME) -lrt -lm -lpthread

EVDEV_LIB_DISTRIBUTION=/usr/local
EVDEV_INCDIR=/usr/local/include/libevdev-1.0/libevdev
EVDEV_LIBDIR=/usr/local/lib
EVDEV_LIBRARY_NAME=evdev
EVDEV_LIBRARY=$(EVDEV_LIBDIR)/lib$(EVDEV_LIBRARY_NAME).a
LDFLAGS+= -L$(EVDEV_LIBDIR) -l$(EVDEV_LIBRARY_NAME) 

MY_INCDIR = .
MY_LIB = $(MY_INCDIR)/libshared.o




all : libretromatrix.a

$(RGB_LIBRARY): FORCE
	$(MAKE) -C $(RGB_LIBDIR) 
	

libretromatrix.a: mylib.o  $(RGB_LIBRARY) $(EVDEV_LIBRARY)
	$(AR) rcs libretromatrix.a mylib.o 

mylib.o: mylib.cc
	$(CXX) -I$(MY_INCDIR) -I$(RGB_INCDIR) -I$(EVDEV_INCDIR) $(LDLIBS) -o mylib.o -c mylib.cc 





clean:
	rm -f *.a *.o

FORCE:
.PHONY: FORCE
