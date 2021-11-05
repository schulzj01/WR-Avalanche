const avg = {};

avg.pih = `
FWUS45 KPIH 141706
AVGPIH
AVALANCHE WEATHER GUIDANCE
NATIONAL WEATHER SERVICE POCATELLO ID
1006 AM MST MON DEC 14 2020
.DISCUSSION...
This is a test discussion from NWS Pocatello regarding avalanche content.
This discussion will be at the top of all of our AVG products.  You're currently
viewing the one in the avgTestData.js testing data.
...Nordic Valley (9,145 FT)...
DATE             MONDAY 12/14            TUESDAY 12/15           
TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
CLOUD COVER            SC SC SC SC FW FW FW SC BK OV OV OV BK BK OV
CLOUD COVER (%)        40 40 45 50 15 15 25 35 65 75 85 80 70 65 70
TEMPERATURE            17 18 15 16 14 14 13 14 15 16 16 18 18 19 19
MAX/MIN TEMP                 21          11          19          17
WIND DIR               NW  N NW NW NW NW NW  W  W SW SW  W NW NW NW
WIND (MPH)              6  9  9  9  6  5  6  5  5  5  2  2  3  4  5
WIND GUST (MPH)                                                    
PRECIP PROB (%)        20  5  5  5  5  0  0  0 30 30 40 40 40 30 30
PRECIP TYPE                                     S  S  S  S  S  S   
12 HOUR QPF                0.00        0.00        0.01        0.03
12 HOUR SNOW                0.0         0.0         0.2         0.3
SNOW LEVEL (KFT)        3  3  3  2  2  2  1  1  2  2  2  2  2  2  2
...Snowbasin (10,079 FT)...
DATE             MONDAY 12/14            TUESDAY 12/15           
TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
CLOUD COVER            BK BK BK SC SC SC SC SC BK OV OV OV OV OV OV
CLOUD COVER (%)        55 65 55 40 25 30 45 45 60 80 90 85 75 80 85
TEMPERATURE            15 15 11  9  8  8  8 10 15 17 16 16 17 19 18
MAX/MIN TEMP                 17           6          18          16
WIND DIR               NW NW NW NW NW  W  W  W  W  W SW SW  W  W  W
WIND (MPH)             11 11 13 12  9 10 11 10 10 11  4  4  4  5  4
WIND GUST (MPH)              21 20                                 
PRECIP PROB (%)        20 10 10  0  0  0  0  0 30 30 70 70 70 40 40
PRECIP TYPE                                     S  S  S  S  S  S  S
12 HOUR QPF                0.00        0.00        0.02        0.07
12 HOUR SNOW                0.0         0.0         0.2         0.9
SNOW LEVEL (KFT)        3  3  3  3  2  2  1  2  2  2  2  2  3  3  3
...Texas (9,495 FT)...
DATE             MONDAY 12/14            TUESDAY 12/15           
TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
CLOUD COVER            SC SC SC SC FW FW SC SC BK OV OV OV OV OV OV
CLOUD COVER (%)        45 50 45 40  5 15 25 40 70 80 90 90 80 80 80
TEMPERATURE            16 16 15 14 13 11 11 12 16 16 17 16 17 21 21
MAX/MIN TEMP                 18          10          18          16
WIND DIR               NW NW NW NW NW NW  W  W  W  W  W  W  W  W NW
WIND (MPH)             13 13 14 13 12 12 13 13 12 13  6  8 10 12 13
WIND GUST (MPH)        21 21 23 21 20 20 21 21 20 21          20 21
PRECIP PROB (%)        20 10 10  0  0  0  0  0 20 20 60 60 60 20 20
PRECIP TYPE                                     S  S  S  S  S  S  S
12 HOUR QPF                0.00        0.00        0.01        0.05
12 HOUR SNOW                0.0         0.0         0.1         0.5
SNOW LEVEL (KFT)        3  3  3  3  2  2  1  1  2  2  2  2  2  2  3
...Powder Mountain (7775 FT)...
DATE             MONDAY 12/14            TUESDAY 12/15           
TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
CLOUD COVER            BK BK BK BK SC SC SC BK OV OV OV OV OV OV OV
CLOUD COVER (%)        55 55 65 65 35 35 35 55 75 85 90 85 85 85 90
TEMPERATURE            19 20 17 15 13 11 10 11 17 20 19 20 20 20 19
MAX/MIN TEMP                 22           7          21          17
WIND DIR                N  N NW NW  W SW SW SW SW SW SW SW SW SW SW
WIND (MPH)              2  4  3  2  1  2  2  2  2  5  5  4  5  5  3
WIND GUST (MPH)                                                    
PRECIP PROB (%)        20 10 10  0  0  0  0  0 40 40 60 60 60 40 40
PRECIP TYPE                                     S  S  S  S  S  S  S
12 HOUR QPF                0.00        0.00        0.03        0.07
12 HOUR SNOW                0.0         0.0         0.3         0.8
SNOW LEVEL (KFT)        3  3  3  3  2  2  1  1  2  2  3  2  2  3  3
...VIENNA MINE (8960 FT)...
DATE             MONDAY 12/14            TUESDAY 12/15           
TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
CLOUD COVER            SC SC SC SC SC SC SC BK BK OV OV OV OV OV OV
CLOUD COVER (%)        45 50 50 50 35 30 45 50 65 85 90 85 80 85 90
TEMPERATURE            17 17 12 10  9  9  9 12 16 17 16 16 18 20 20
MAX/MIN TEMP                 19           7          18          16
WIND DIR                N  N  N  N  N  W  W  W  W  W SW  W  W  W  W
WIND (MPH)             10 10 10  9  5  6  9  9  9 10  4  4  4  5  5
WIND GUST (MPH)                                                    
PRECIP PROB (%)        20 10 10  0  0  0  0  0 20 20 70 70 70 30 30
PRECIP TYPE                                     S  S  S  S  S  S  S
12 HOUR QPF                0.00        0.00        0.02        0.08
12 HOUR SNOW                0.0         0.0         0.2         1.0
SNOW LEVEL (KFT)        3  3  3  3  2  2  1  2  2  2  2  2  3  3  3
...COPPER MTN (8600 FT)...
DATE             MONDAY 12/14            TUESDAY 12/15           
TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
CLOUD COVER            BK BK OV BK BK BK OV OV OV OV OV OV OV OV OV
CLOUD COVER (%)        55 60 70 65 55 65 80 80 80 90 90 90 85 85 90
TEMPERATURE            20 22 17 14 10  8  7  9 18 19 18 18 17 17 17
MAX/MIN TEMP                 22           3          20          14
WIND DIR                N  N NW  W SW SW SW SW SW SW SW SW SW SW SW
WIND (MPH)              5  5  5  3  3  3  5  5  8 10  5  5  6  5  4
WIND GUST (MPH)                                                    
PRECIP PROB (%)        20 10 10  0  0  0  0  0 50 50 80 80 80 50 50
PRECIP TYPE                                     S  S  S  S  S  S  S
12 HOUR QPF                0.00        0.00        0.05        0.11
12 HOUR SNOW                0.0         0.0         0.6         1.3
SNOW LEVEL (KFT)        3  3  3  3  2  1  1  1  2  2  2  2  2  3  3
...PINE CREEK PASS (7330 FT)...
DATE             MONDAY 12/14            TUESDAY 12/15           
TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
CLOUD COVER            OV OV OV OV OV OV BK OV OV OV OV OV OV OV OV
CLOUD COVER (%)        95 95100 95 85 80 65 75 80 90 95 95 90 95 95
TEMPERATURE            23 22 17 17 16 15 14 15 20 20 19 19 20 21 21
MAX/MIN TEMP                 24          12          21          19
WIND DIR                N NE NE NE NE SW SW SW SW SW  S  S  S  S  S
WIND (MPH)              5  5  5  3  3  2  4  5  6  9  4  4  4  5  5
WIND GUST (MPH)                                                    
PRECIP PROB (%)        70 50 50 30 30  5  5  0 40 40 80 80 80 60 80
PRECIP TYPE             S  S  S  S              S  S  S  S  S  S  S
12 HOUR QPF                0.05        0.01        0.04        0.16
12 HOUR SNOW                0.7         0.2         0.6         2.3
SNOW LEVEL (KFT)        2  3  2  2  2  1  1  1  1  2  2  1  1  1  1
...TARGHEE PASS (7070 FT)...
DATE             MONDAY 12/14            TUESDAY 12/15           
TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
CLOUD COVER            BK OV BK BK BK OV OV OV OV OV OV OV OV OV OV
CLOUD COVER (%)        65 75 65 55 65 70 80 75 80 90 95 95 90 85 85
TEMPERATURE            19 21 16 12 10  9  7  7 11 12 12 14 14 14 13
MAX/MIN TEMP                 21           6          14          13
WIND DIR                W  W  W  W SW SW SW SW SW SW SW SW SW SW SW
WIND (MPH)              5  8  6  5  5  5  6 10 12 14  8  9  9  6  6
WIND GUST (MPH)           13 12          12    21 24               
PRECIP PROB (%)        60 50 50 10 10  5  5  5 40 40 70 70 70 50 70
PRECIP TYPE             S  S                    S  S  S  S  S  S  S
12 HOUR QPF                0.04        0.00        0.04        0.10
12 HOUR SNOW                0.6         0.0         0.5         1.5
SNOW LEVEL (KFT)        2  3  3  2  2  1  1  0  1  1  1  1  1  1  1
...BLOOMINGTON LAKE (7610 FT)...
DATE             MONDAY 12/14            TUESDAY 12/15           
TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
CLOUD COVER            OV OV OV BK SC SC BK SC BK OV OV OV OV OV OV
CLOUD COVER (%)        95 90 80 60 50 40 55 50 65 75 80 80 75 80 90
TEMPERATURE            20 18 14 13 12 12 11 14 18 17 13 13 14 17 17
MAX/MIN TEMP                 21          10          19          13
WIND DIR               NW NW NW  N NW NW  W  W  W  W  W  W SW SW SW
WIND (MPH)              8 12 10 10  6  5  5  5  8 12  6  8  9  9  8
WIND GUST (MPH)           20                      20               
PRECIP PROB (%)        80 70 70 30 30 10 10  0 20 20 60 60 60 40 80
PRECIP TYPE             S  S  S  S              S  S  S  S  S  S  S
12 HOUR QPF                0.08        0.01        0.01        0.07
12 HOUR SNOW                1.2         0.2         0.2         0.9
SNOW LEVEL (KFT)        3  3  3  2  2  2  1  1  1  2  2  1  1  2  2
$$
--- PRECIP TYPE CODES ---
CODE   TYPE
 T     THUNDERSTORMS
 R     RAIN
 S     SNOW
 I     SLEET
 Z     FREEZING RAIN
`;

avg.boi = `
FWUS45 KBOI 141029
AVGBOI
AVALANCHE WEATHER GUIDANCE
NATIONAL WEATHER SERVICE BOISE ID
328 AM MST THU JAN 14 2021
*********************PAYETTE NF / MCCALL AREA**********************
...GRANITE MOUNTAIN (7804 FT)...
DATE             THURSDAY 01/14          FRIDAY 01/15
TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
CLOUD COVER      SC SC FW FW FW FW SC SC SC SC OV OV OV OV SC SC SC
CLOUD COVER (%)  25 25 25 25 10 10 35 35 35 35 70 70 80 80 50 50 45
TEMPERATURE      15 15 22 25 21 22 24 24 23 23 27 27 24 24 24 23 21
MAX/MIN TEMP                 25          20          28          18
WIND DIR         NE  S SW SW NE  E SE SE SE  S  S SW SW SW  W NW NE
WIND (MPH)        2  2  2  2  2  2  3  4  5  5  6  4  2  2  2  3  2
WIND GUST (MPH)
PRECIP PROB (%)   0  0  0  0  0  0  0  0  0  0 30 30 50 50 50 10 10
PRECIP TYPE                                     S  S  S  S
12 HOUR QPF                0.00        0.00        0.03        0.05
12 HOUR SNOW                0.0         0.0         0.3         0.5
SNOW LEVEL (KFT)  1  1  3  3  3  3  3  3  3  3  4  4  4  4  4  4  3
...SECESH SUMMIT SNOTEL (6520 FT)...
DATE             THURSDAY 01/14          FRIDAY 01/15
TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
CLOUD COVER      FW FW FW FW FW FW SC SC SC SC OV OV OV OV BK BK SC
CLOUD COVER (%)  25 25 25 25 15 15 40 40 40 40 70 70 85 85 55 55 50
TEMPERATURE      15 17 28 31 20 18 18 23 23 24 32 31 27 23 24 24 21
MAX/MIN TEMP                 32          16          33          16
WIND DIR         SW  S  S SW  S  S  S  S  S  S  S SW  S SW  W NW NE
WIND (MPH)        3  4  3  3  2  3  4  5  6  5  6  4  4  2  2  2  1
WIND GUST (MPH)                             11    10
PRECIP PROB (%)   0  0  0  0  0  0  0  0  0  0 40 40 50 50 50 20 20
PRECIP TYPE                                     S  S  S  S  S  S
12 HOUR QPF                0.00        0.00        0.04        0.06
12 HOUR SNOW                0.0         0.0         0.4         0.7
SNOW LEVEL (KFT)  2  2  3  3  4  4  3  3  3  3  4  4  4  4  4  4  3
...BRUNDAGE RESERVOIR SNOTEL FROM 11K FT TO 13K FT...
DATE             THURSDAY 01/14          FRIDAY 01/15
TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
CLOUD COVER      SC SC FW FW FW FW SC SC SC SC OV OV OV OV SC SC SC
CLOUD COVER (%)  25 25 25 25 10 10 35 35 35 35 70 70 85 85 50 50 40
TEMPERATURE      14 15 27 30 22 21 22 22 21 22 31 31 26 25 24 22 20
MAX/MIN TEMP                 31          18          33          18
WIND DIR          W SW SW SW  N NE  S  S  S SW SW SW SW SW NW  N NE
WIND (MPH)        2  2  2  2  1  1  2  3  4  5  6  4  2  2  2  2  2
WIND GUST (MPH)
PRECIP PROB (%)   0  0  0  0  0  0  0  0  0  0 30 30 40 40 40 10 10
PRECIP TYPE                                     S  S  S  S
12 HOUR QPF                0.00        0.00        0.03        0.04
12 HOUR SNOW                0.0         0.0         0.2         0.4
SNOW LEVEL (KFT)  1  1  3  3  3  3  3  3  3  3  4  4  4  4  4  4  3
...SQUAW FLAT SNOTEL (6240 FT)...
DATE             THURSDAY 01/14          FRIDAY 01/15
TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
CLOUD COVER      SC SC SC SC FW FW SC SC SC SC BK BK OV OV SC SC SC
CLOUD COVER (%)  30 30 25 25 15 15 35 35 40 40 70 70 80 80 40 40 35
TEMPERATURE      15 17 30 32 26 24 25 23 23 24 33 32 28 27 26 24 22
MAX/MIN TEMP                 32          19          34          20
WIND DIR          W NW NW NW NW NW  S  S  S  S  S SW SW  W NE NE NE
WIND (MPH)        1  2  2  1  1  2  3  4  3  3  3  2  2  1  1  2  2
WIND GUST (MPH)
PRECIP PROB (%)   0  0  0  0  0  0  0  0  0  0 20 20 30 30 30  5  5
PRECIP TYPE                                     S  S  S  S
12 HOUR QPF                0.00        0.00        0.01        0.02
12 HOUR SNOW                0.0         0.0         0.1         0.2
SNOW LEVEL (KFT)  2  2  3  3  3  3  3  3  3  3  4  4  4  4  4  4  3
...BIG CREEK SUMMIT SNOTEL (6580 FT)...
DATE             THURSDAY 01/14          FRIDAY 01/15
TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
CLOUD COVER      FW FW FW FW FW FW SC SC SC SC BK BK OV OV SC SC SC
CLOUD COVER (%)  25 25 20 20 10 10 35 35 35 35 60 60 85 85 45 45 35
TEMPERATURE      15 16 27 29 24 20 21 24 25 26 33 32 28 26 25 24 22
MAX/MIN TEMP                 30          19          34          19
WIND DIR          W  W  W  W  W SW  S SW SW SW  S SW  W SW  W  N NE
WIND (MPH)        2  2  1  1  2  1  3  3  3  2  3  2  2  1  2  2  2
WIND GUST (MPH)
PRECIP PROB (%)   0  0  0  0  0  0  0  0  0  0 20 20 40 40 40  5  5
PRECIP TYPE                                     S  S  S  S
12 HOUR QPF                0.00        0.00        0.01        0.02
12 HOUR SNOW                0.0         0.0         0.1         0.2
SNOW LEVEL (KFT)  1  1  3  3  3  3  3  3  3  3  4  4  4  4  4  4  3
***********************SOLDIER MOUNTAIN AREA***********************
...SOLDIER MOUNTAIN SUMMIT (10096 FT)...
DATE             THURSDAY 01/14          FRIDAY 01/15
TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
CLOUD COVER      FW FW FW FW FW FW SC SC SC SC SC SC OV OV FW FW FW
CLOUD COVER (%)  15 15 15 15 15 15 35 35 35 35 40 40 75 75 25 25 10
TEMPERATURE      11 13 19 23 22 23 23 24 26 25 29 28 25 23 22 21 19
MAX/MIN TEMP                 25          21          29          16
WIND DIR         NW NW NW NW NW NW NW NW  W  W  W  W  W NW NW NW  N
WIND (MPH)       12 12 11 11 11 12 10  9  9  9  6  4  8  9 11 11 10
WIND GUST (MPH)     18 18 17
PRECIP PROB (%)   0  0  0  0  0  0  0  0  0  0  5  5 10 10 10  5  5
PRECIP TYPE
12 HOUR QPF                0.00        0.00        0.00        0.00
12 HOUR SNOW                0.0         0.0         0.0         0.0
SNOW LEVEL (KFT)  1  1  3  3  4  4  4  4  4  4  5  5  5  5  4  4  3
...SOLDIER RANGER STATION SNOTEL (5740 FT)...
DATE             THURSDAY 01/14          FRIDAY 01/15
TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
CLOUD COVER      FW FW FW FW FW FW SC SC SC SC SC SC OV OV FW FW FW
CLOUD COVER (%)  15 15 15 15 20 20 35 35 35 35 40 40 75 75 25 25 10
TEMPERATURE      16 19 33 34 24 23 23 25 24 27 37 35 29 27 26 24 20
MAX/MIN TEMP                 38          19          39          17
WIND DIR          N NE  N  N  N  N  N  N  N NW NW SE  W NW NW  N  N
WIND (MPH)        6  6  4  4  4  6  5  5  5  5  3  2  2  4  6  6  6
WIND GUST (MPH)
PRECIP PROB (%)   0  0  0  0  0  0  0  0  0  0  0  0 10 10 10  5  5
PRECIP TYPE
12 HOUR QPF                0.00        0.00        0.00        0.00
12 HOUR SNOW                0.0         0.0         0.0         0.0
SNOW LEVEL (KFT)  1  1  3  3  4  4  4  4  4  4  5  5  5  5  4  4  3
...FLECK SUMMIT SNOTEL (6482 FT)...
DATE             THURSDAY 01/14          FRIDAY 01/15
TIME (LT)        06 09 12 15 18 21 00 03 06 09 12 15 18 21 00 03 06
CLOUD COVER      FW FW FW FW FW FW SC SC SC SC SC SC OV OV SC SC FW
CLOUD COVER (%)  15 15 10 10 15 15 30 30 30 30 40 40 75 75 25 25 10
TEMPERATURE      11 12 26 32 23 20 17 17 16 18 31 33 29 25 22 18 14
MAX/MIN TEMP                 33          12          35          12
WIND DIR          N  N NW  W  N  N  N  N  N NW NW SE  W NW NW  N  N
WIND (MPH)        5  4  3  3  4  4  4  3  3  5  4  1  2  3  4  4  5
WIND GUST (MPH)
PRECIP PROB (%)   0  0  0  0  0  0  0  0  0  0  5  5 10 10 10  5  5
PRECIP TYPE
12 HOUR QPF                0.00        0.00        0.00        0.00
12 HOUR SNOW                0.0         0.0         0.0         0.0
SNOW LEVEL (KFT)  1  1  3  3  4  4  4  4  4  4  5  5  5  5  4  4  3
$$
--- PRECIP TYPE CODES ---
CODE   TYPE
T     THUNDERSTORMS
R     RAIN
S     SNOW
I     SLEET
Z     FREEZING RAIN
`;

avg.slc = `
FWUS45 KSLC 050901
AVGSLC

AVALANCHE WEATHER GUIDANCE
NATIONAL WEATHER SERVICE SALT LAKE CITY UT
301 AM MDT FRI NOV 5 2021

**********************NORTHERN WASATCH FRONT***********************

...NORDIC VALLEY (6991 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  SC  SC  BK  OV  BK  OV  OV  OV  OV  OV  OV  OV  OV  BK  BK  OV
CLOUD COVER (%)  15  30  40  60  75  65  75  90  85  80  70  75  75  75  65  65  75
TEMPERATURE      36  36  50  57  53  48  47  45  44  43  53  58  54  49  46  42  39
MAX/MIN TEMP                     59              40              59              35
WIND DIR         SW   S  SW  SW   S  SE  SE   S   S   S  SW  SW   S  SE   S   S   S
WIND (MPH)        2   4   6   8   5   4   6   5   6  11  12  13   6   6   6   8   8
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   5   0   0   5   5  10  10  20  20
PRECIP TYPE                                                               R   R   R
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)7.7 7.9 8.1 8.3 8.7 8.8 9.1 9.1 8.9 8.8 8.7 8.7 9.0 9.1 8.8 8.6 8.2


...POWDER MOUNTAIN (8488 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  SC  SC  BK  OV  BK  BK  OV  OV  OV  OV  OV  OV  OV  BK  BK  OV
CLOUD COVER (%)  15  25  40  60  75  65  70  85  80  75  75  85  80  70  65  65  70
TEMPERATURE      35  35  41  43  39  41  41  42  42  40  43  43  40  40  40  38  36
MAX/MIN TEMP                     44              40              44              33
WIND DIR         SW  SW  SW  SW  SW   S   S   S   S   S  SW  SW   S   S   S  SW   S
WIND (MPH)        9  12  13  13  11  11  12  13  13  14  16  17  11  11  13  13  12
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   5   0   0   5   5  10  10  20  20
PRECIP TYPE                                                               S   S   S
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)7.6 7.8 8.2 8.4 8.7 8.8 9.0 9.0 8.8 8.7 8.7 8.8 9.0 9.0 8.7 8.5 8.1


...SNOWBASIN (8599 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  SC  SC  OV  OV  OV  OV  OV  OV  OV  OV  OV  OV  OV  BK  BK  BK
CLOUD COVER (%)  15  40  40  75  75  70  80  95  85  85  75  80  80  70  65  65  70
TEMPERATURE      31  31  37  40  36  38  38  40  38  37  39  40  36  37  37  35  32
MAX/MIN TEMP                     41              36              41              30
WIND DIR         SW  SW  SW  SW   S   S   S   S   S   S  SW  SW  SW   S   S   S   S
WIND (MPH)        9  11  12  11  12  13  14  17  17  17  19  18  11  12  13  14  14
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   5   5   0   0   0   0  10  10  20  20
PRECIP TYPE                                                               S   S   S
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)7.9 7.9 8.1 8.4 8.8 8.9 9.2 9.1 8.9 8.8 8.7 8.8 9.0 9.2 8.8 8.6 8.2


...FARMINGTON FLATS (7398 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  FW  SC  BK  OV  BK  OV  OV  OV  OV  BK  OV  BK  BK  BK  BK  BK
CLOUD COVER (%)  10  15  25  65  70  60  70  80  70  70  65  70  65  65  50  55  55
TEMPERATURE      37  38  49  51  44  44  45  45  45  44  51  51  45  44  44  41  38
MAX/MIN TEMP                     52              42              52              35
WIND DIR         SW  SW  SW  SW  SW  SW   S   S   S   S  SW  SW  SW   S   S   S   S
WIND (MPH)        4  11  13  13  11   8  13  11  10  18  19  19  12  11  14  13  16
WIND GUST (MPH)                              28  27                                
PRECIP PROB (%)   0   0   0   0   0   0   0   0   5   0   0   0   0   5   5  10  10
PRECIP TYPE                                                                       S
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.1 8.0 8.3 8.6 8.8 8.9 9.2 9.0 8.9 8.8 8.8 8.9 9.0 9.2 8.7 8.5 8.1


...MONTE CRISTO (7398 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  FW  SC  SC  BK  BK  BK  OV  OV  BK  BK  OV  OV  BK  BK  BK  BK
CLOUD COVER (%)  15  20  30  45  70  65  65  75  75  65  60  75  75  70  60  60  60
TEMPERATURE      37  37  47  50  44  43  43  43  44  43  50  50  45  43  42  40  38
MAX/MIN TEMP                     50              41              51              36
WIND DIR          S  SW  SW  SW   S   S  SE   S   S   S  SW  SW  SW   S  SW  SW  SW
WIND (MPH)        5  11  12  12   9   9  11  10  10  12  16  16  11  10  12  12  13
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   5   0   0   5   5  10  10  20  20
PRECIP TYPE                                                               R   S   S
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)7.6 7.7 8.2 8.4 8.6 8.7 8.9 8.9 8.7 8.6 8.8 8.9 8.9 8.9 8.6 8.4 8.0


...SESSIONS MOUNTAINS (8397 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  FW  SC  BK  BK  BK  BK  OV  OV  BK  BK  BK  BK  BK  SC  SC  SC
CLOUD COVER (%)  10  10  30  65  65  55  65  85  75  70  65  65  60  60  45  50  50
TEMPERATURE      39  37  47  50  46  42  44  45  45  42  49  51  46  42  43  42  40
MAX/MIN TEMP                     50              41              51              35
WIND DIR         SW  SW  SW  SW  SW  SW   S   S  SW  SW  SW  SW  SW   S   S   S   S
WIND (MPH)        6  11  14  14  12   9  12  12  12  18  20  20  14  12  17  13  13
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5  10  10
PRECIP TYPE                                                                       S
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.2 8.2 8.4 8.8 8.9 8.9 9.2 9.1 8.9 8.8 8.8 8.9 9.0 9.1 8.6 8.5 8.1


***********************CENTRAL WASATCH FRONT***********************

...ALTA (8900 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  FW  FW  BK  BK  SC  BK  BK  BK  BK  BK  BK  SC  SC  SC  SC  SC
CLOUD COVER (%)   5   5  25  55  55  40  55  70  60  60  50  50  45  50  30  35  35
TEMPERATURE      33  34  42  44  39  37  38  38  37  37  41  43  40  38  37  36  34
MAX/MIN TEMP                     44              36              43              32
WIND DIR          W   W   W  SW  SW   S   S   S   S   S  SW  SW  SW   S   S   S   S
WIND (MPH)        8  14  12  12  12  11  19  14  13  21  20  21  17  18  20  21  19
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5   5   5
PRECIP TYPE                                                                        
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.4 8.1 8.7 8.9 8.9 8.9 9.2 9.0 8.9 8.9 9.0 9.1 9.1 9.0 8.6 8.6 8.3


...LCC - ALTA/SNOWBIRD (9436 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      CL  FW  FW  BK  BK  SC  BK  OV  BK  BK  BK  BK  SC  SC  SC  SC  SC
CLOUD COVER (%)   5   5  25  55  55  40  60  70  60  60  50  50  50  50  30  35  30
TEMPERATURE      33  33  41  43  38  36  37  37  36  36  40  42  39  37  36  35  33
MAX/MIN TEMP                     43              35              42              31
WIND DIR          W   W  SW  SW  SW   S   S  SW  SW  SW  SW  SW  SW   S   S   S   S
WIND (MPH)        8  14  12  12  12  10  18  13  12  21  20  21  17  18  20  21  19
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5   5   5
PRECIP TYPE                                                                        
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.5 8.2 8.7 8.9 8.9 8.9 9.2 9.1 8.9 8.9 9.0 9.1 9.1 9.0 8.6 8.6 8.3


...LCC - MID CANYON/ELBERTS (9298 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  FW  FW  BK  BK  SC  BK  OV  BK  BK  BK  BK  SC  SC  SC  SC  SC
CLOUD COVER (%)   5  10  25  55  60  45  60  75  70  65  55  55  50  50  30  40  35
TEMPERATURE      35  36  45  48  43  40  40  41  40  39  45  47  45  40  40  38  36
MAX/MIN TEMP                     49              38              49              34
WIND DIR         SW   W  SW  SW   S   S   S   S   S   S   S  SW  SW   S   S   S   S
WIND (MPH)        6  12  11  11  11  11  18  13  12  20  19  19  17  17  19  20  18
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5   5   5
PRECIP TYPE                                                                        
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.5 8.1 8.7 8.9 8.9 8.9 9.2 9.1 8.9 8.9 9.0 9.1 9.1 9.0 8.6 8.6 8.3


...BCC - BRIGTON/SOLITUDE (8757 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  FW  FW  BK  BK  SC  SC  BK  SC  SC  SC  SC  SC  SC  SC  SC  SC
CLOUD COVER (%)   5   5  25  55  55  40  50  60  50  45  45  50  45  45  30  35  35
TEMPERATURE      35  35  43  45  39  39  39  40  39  38  42  44  39  39  38  38  35
MAX/MIN TEMP                     45              36              44              33
WIND DIR          W   W  SW  SW  SW   S  SW  SW  SW  SW  SW  SW  SW   S   S   S   S
WIND (MPH)        6  12  11  11  11  10  17  12  12  20  20  19  16  18  19  20  19
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5   5   5
PRECIP TYPE                                                                        
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.4 8.1 8.8 9.0 8.9 8.9 9.1 9.0 8.8 8.9 9.0 9.1 9.1 8.9 8.6 8.6 8.3


...BCC - MID CANYON/SPRUCES (7398 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  FW  FW  BK  BK  SC  BK  BK  BK  BK  BK  BK  SC  SC  SC  SC  SC
CLOUD COVER (%)   5  10  25  55  55  40  55  65  60  60  55  50  45  50  30  40  35
TEMPERATURE      37  36  48  50  44  40  40  43  43  41  49  50  45  41  40  40  38
MAX/MIN TEMP                     51              39              51              35
WIND DIR         SW  SW  SW  SW   S   S   S   S   S   S  SW  SW  SW   S   S   S   S
WIND (MPH)        4  11  10  10  10   9  14  10  10  17  18  18  13  13  18  19  16
WIND GUST (MPH)                              28  27                                
PRECIP PROB (%)   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5   5   5
PRECIP TYPE                                                                        
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.4 8.1 8.6 8.9 8.8 8.9 9.2 9.1 8.9 8.9 9.0 9.1 9.1 9.0 8.6 8.5 8.2


...PARK CITY (6568 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  FW  FW  SC  BK  SC  SC  BK  BK  BK  BK  BK  SC  BK  SC  SC  SC
CLOUD COVER (%)  10  10  25  50  55  50  50  60  60  60  55  55  45  50  30  40  40
TEMPERATURE      33  35  52  58  52  44  41  42  41  41  54  58  53  46  44  41  37
MAX/MIN TEMP                     58              36              58              34
WIND DIR          S   S  SW  SW   S  SE  SE   S   S   S   S   S   S   S   S   S   S
WIND (MPH)        2   4   6   8   5   5   9   6   6  11  14  14  10  10  13  14  12
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5   5   5
PRECIP TYPE                                                                        
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.4 8.1 8.7 9.0 8.8 8.9 9.1 9.0 8.8 8.8 8.9 9.0 9.0 8.9 8.5 8.4 8.2


...PARK CITY RIDGELINE (9570 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  FW  FW  BK  BK  SC  SC  BK  SC  SC  SC  SC  SC  SC  SC  SC  SC
CLOUD COVER (%)   5   5  20  55  60  40  40  50  50  45  45  45  40  45  30  35  35
TEMPERATURE      37  35  44  47  42  40  41  43  42  40  44  45  42  41  41  40  38
MAX/MIN TEMP                     47              39              46              34
WIND DIR          W  SW  SW  SW  SW   S   S  SW  SW  SW   S   S  SW   S   S   S   S
WIND (MPH)        6  11  11  11  11  12  16  14  13  19  20  19  16  17  19  20  18
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5   5   5
PRECIP TYPE                                                                        
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.4 8.1 8.7 9.0 8.8 8.9 9.1 9.0 8.8 8.8 9.0 9.0 9.0 8.9 8.5 8.5 8.2


**********************SOUTHERN WASATCH FRONT***********************

...ASPEN GROVE (7300 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      CL  CL  FW  BK  SC  SC  BK  BK  BK  BK  BK  SC  SC  SC  FW  SC  SC
CLOUD COVER (%)   5   5  20  55  45  45  50  70  70  65  55  45  35  35  20  25  25
TEMPERATURE      36  38  51  53  44  40  39  42  41  42  51  52  44  41  40  40  38
MAX/MIN TEMP                     54              37              54              34
WIND DIR          W  SW  SW  SW  SW   S  SW  SW  SW  SW  SW  SW  SW   S   S   S   S
WIND (MPH)        8   9  10  11   9   9  13  12  12  19  19  19  14  12  16  16  16
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5
PRECIP TYPE                                                                        
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.7 8.4 8.7 8.9 9.0 9.0 9.3 9.1 8.9 8.8 8.8 9.0 9.1 8.9 8.6 8.6 8.3


...SOLDIER HOLLOW (5804 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      CL  FW  FW  SC  SC  SC  BK  BK  BK  BK  SC  BK  SC  SC  FW  SC  SC
CLOUD COVER (%)   5   5  20  50  45  40  55  65  55  50  50  50  35  35  25  30  30
TEMPERATURE      34  34  48  58  54  46  43  42  42  39  50  57  53  48  44  41  38
MAX/MIN TEMP                     59              39              59              35
WIND DIR         SW   S   S  SW  SW   S   S  SW  SW   S   S  SW   S   S   S   S   S
WIND (MPH)        2   4   6  10   5   4   6   4   4  10  12  17   9   8  11  11  11
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5
PRECIP TYPE                                                                        
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.6 8.3 8.7 8.9 9.0 8.9 9.2 9.1 8.9 8.8 8.9 9.0 9.1 8.9 8.6 8.6 8.3


...SUNDANCE (6690 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      CL  CL  FW  SC  SC  SC  SC  BK  BK  BK  BK  SC  SC  SC  FW  SC  SC
CLOUD COVER (%)   5   5  25  50  45  45  45  65  65  65  50  45  35  30  20  30  30
TEMPERATURE      40  40  55  62  58  52  48  47  46  45  57  61  59  53  49  45  42
MAX/MIN TEMP                     63              43              63              40
WIND DIR         SE  SE  SW  SW   S   S  SW  SW  SW  SW  SW  SW  SW   S   S   S   S
WIND (MPH)        3   8  10  12   8   5  11   9   9  16  18  18  12   9  12  13  12
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5
PRECIP TYPE                                                                        
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.7 8.5 8.7 8.9 9.0 9.0 9.3 9.1 9.0 8.9 8.9 9.0 9.2 8.9 8.7 8.7 8.4


...BUNNELS FORK (7904 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      CL  CL  FW  SC  SC  SC  SC  BK  BK  BK  BK  SC  SC  SC  FW  SC  SC
CLOUD COVER (%)   5   5  25  45  45  45  40  65  60  60  50  45  35  35  20  30  25
TEMPERATURE      41  39  47  51  46  46  46  46  45  44  49  50  47  45  45  43  42
MAX/MIN TEMP                     52              43              52              39
WIND DIR          S   S  SW  SW   S   S   S   S  SW  SW  SW  SW  SW   S   S   S   S
WIND (MPH)        5   8  10  11  10  10  12  13  13  17  19  18  14  12  13  14  14
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5
PRECIP TYPE                                                                        
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.7 8.5 8.8 8.9 9.0 9.0 9.3 9.1 9.0 8.9 8.9 9.0 9.2 8.9 8.7 8.8 8.4


...PROVO PEAK AREA (10197 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      CL  CL  FW  SC  SC  SC  SC  BK  BK  BK  BK  SC  SC  SC  FW  SC  SC
CLOUD COVER (%)   5   5  20  50  45  40  35  60  60  65  50  45  35  35  20  30  25
TEMPERATURE      35  36  42  45  42  39  39  39  38  38  43  45  41  39  38  37  35
MAX/MIN TEMP                     45              37              45              34
WIND DIR          W   W  SW  SW  SW  SE   S   S  SW  SW  SW  SW  SW   S  SE  SE   S
WIND (MPH)        9   9  10  10  10  11  12  12  12  16  17  19  16  11  13  14  13
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5
PRECIP TYPE                                                                        
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.8 8.5 8.8 9.0 9.1 9.0 9.3 9.2 9.1 9.0 8.9 9.1 9.2 8.9 8.7 8.8 8.5


****************************LOGAN AREA*****************************

...CHERRY PEAK (7451 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  FW  SC  BK  BK  OV  OV  OV  OV  BK  BK  OV  OV  OV  OV  OV  OV
CLOUD COVER (%)  15  20  25  55  65  75  85  95  85  65  65  80  80  80  75  75  85
TEMPERATURE      37  37  45  47  43  44  45  46  45  44  47  47  43  43  42  40  38
MAX/MIN TEMP                     47              43              48              36
WIND DIR         SE  SW  SW  SW   S  SE   S   S   S   S  SW  SW   S   S  NW  NW  SW
WIND (MPH)        5   8  11  12   9   9  10  10  10  12  16  17   8   6   5   8   6
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   5   5   0   0   5   5  10  10  30  30
PRECIP TYPE                                                               R   S   S
12 HOUR QPF                    0.00            0.00            0.00            0.01
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)7.4 7.4 7.8 8.1 8.3 8.6 9.0 9.0 8.7 8.5 8.5 8.6 8.8 8.7 8.4 7.5 7.2


...BEAVER MOUNTAIN (6880 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  FW  FW  SC  BK  BK  BK  OV  BK  SC  BK  BK  OV  OV  BK  OV  OV
CLOUD COVER (%)  15  10  25  45  60  60  65  80  65  50  50  65  70  75  65  70  80
TEMPERATURE      30  31  46  49  43  39  38  38  39  38  49  49  44  39  38  35  33
MAX/MIN TEMP                     50              36              51              31
WIND DIR          W   W   W  SW  SW  SW   S  SW  SW  SW  SW  SW  SW   W   W   W  SW
WIND (MPH)        2  12  16  16   9   3   8   5   5  16  19  19  11   4   5   9  10
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   5   5   0   0   5   5  10  10  30  30
PRECIP TYPE                                                               S   S   S
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)7.2 7.3 7.9 8.2 8.3 8.5 8.8 8.9 8.7 8.5 8.6 8.7 8.7 8.7 8.5 7.8 7.3


...TONY GROVE (8799 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  FW  FW  SC  BK  BK  OV  OV  OV  BK  BK  OV  OV  OV  OV  OV  OV
CLOUD COVER (%)  10  15  25  45  60  65  75  90  75  60  60  70  80  75  70  70  80
TEMPERATURE      32  34  43  44  38  34  34  42  41  40  45  44  39  33  33  36  34
MAX/MIN TEMP                     44              33              45              28
WIND DIR          W   W   W  SW  SW  SW  SW  SW  SW  SW  SW  SW  SW  SW   W  NW   W
WIND (MPH)        6  16  17  18  13   9  11  11  11  18  20  20  13  11   9  11  11
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   5   0   0   5   5  10  10  30  30
PRECIP TYPE                                                               S   S   S
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)7.3 7.4 7.9 8.3 8.4 8.6 8.9 8.9 8.6 8.5 8.6 8.7 8.7 8.7 8.5 7.7 7.4


...WELLSVILLE MOUNTAINS (8780 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  SC  SC  BK  OV  OV  OV  OV  OV  OV  OV  OV  OV  OV  OV  OV  OV
CLOUD COVER (%)  15  30  35  65  75  80  85  90  85  75  80  85  80  80  80  85  85
TEMPERATURE      35  34  40  43  40  41  42  42  42  41  42  43  40  39  39  37  36
MAX/MIN TEMP                     43              40              43              32
WIND DIR         SW  SW  SW  SW  SW   S   S   S   S  SW  SW  SW  SW  SE  NE   N  NE
WIND (MPH)        8   9  12  12  10  11  13  14  14  13  16  16  10   9  10  10  10
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   5   5   0   0   5   5  10  10  20  20
PRECIP TYPE                                                               S   S   S
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)7.5 7.6 7.9 8.2 8.5 8.8 9.2 9.1 8.8 8.6 8.6 8.5 8.8 8.9 8.8 8.3 7.5


**************************WESTERN UINTAS***************************

...CHRISTMAS MEADOWS (8573 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  FW  SC  SC  SC  SC  SC  SC  FW  FW  SC  SC  SC  SC  FW  SC  SC
CLOUD COVER (%)  10  10  30  45  45  35  30  25  20  25  30  35  35  35  20  30  30
TEMPERATURE      30  32  48  52  45  36  35  36  36  37  49  52  46  38  37  35  34
MAX/MIN TEMP                     52              32              52              31
WIND DIR          S  SW  SW  SW   S   S   S   S   S  SW  SW  SW   S   S   S  SW  SW
WIND (MPH)        4  12  12  12   9   5  11   9   9  18  19  19  14  12  18  18  16
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5
PRECIP TYPE                                                                        
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.3 7.8 8.4 8.9 8.7 8.6 8.6 8.6 8.4 8.7 9.2 9.3 9.0 8.6 8.1 8.2 8.0


...MIRROR LAKE (10525 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  FW  FW  SC  SC  SC  SC  SC  SC  SC  SC  SC  SC  SC  SC  SC  SC
CLOUD COVER (%)  10   5  20  25  40  35  35  35  25  25  30  45  35  30  25  30  30
TEMPERATURE      29  29  37  39  34  31  32  32  32  32  37  39  34  32  32  31  30
MAX/MIN TEMP                     41              31              41              29
WIND DIR          W   W   W  SW  SW   S   S   S   S   S  SW  SW   S   S   S   S  SW
WIND (MPH)        8  14  13  13  10  10  11  11  11  16  18  18  16  13  16  16  16
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5
PRECIP TYPE                                                                        
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.4 7.9 8.6 9.1 9.0 8.8 8.6 8.6 8.4 8.6 9.2 9.3 9.0 8.7 8.2 8.2 8.0


...SAMAK (7648 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  FW  FW  SC  SC  SC  BK  BK  SC  BK  SC  SC  SC  SC  SC  SC  SC
CLOUD COVER (%)   5   5  20  30  40  40  60  65  45  50  40  45  35  35  25  30  30
TEMPERATURE      31  34  46  50  45  38  36  36  36  38  48  50  46  38  37  36  34
MAX/MIN TEMP                     52              34              52              33
WIND DIR          N  SW   W   W   E  SE  SE  SE  SE   S  SW  SW   S   S   S   S   S
WIND (MPH)        2   5   8   8   5   6   8   5   5  10  11  12   8   8  10  10  10
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5
PRECIP TYPE                                                                        
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.6 8.3 8.8 9.1 9.1 8.9 8.9 8.8 8.5 8.7 9.1 9.2 9.2 8.8 8.2 8.3 8.0


...WOLF CREEK PASS (9797 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      CL  FW  FW  SC  SC  SC  BK  BK  SC  BK  SC  SC  SC  SC  SC  SC  FW
CLOUD COVER (%)   5   5  20  30  40  40  55  60  50  55  45  45  30  30  25  25  25
TEMPERATURE      31  35  44  47  41  35  35  35  34  36  45  46  40  35  35  35  33
MAX/MIN TEMP                     48              32              47              31
WIND DIR         NW   W   W   W   S  SE  SE  SE   S   S  SW  SW   S  SE   S   S   S
WIND (MPH)        5  10  10   9   6   5   8   6   6  12  14  16  10   9  11  13  12
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5
PRECIP TYPE                                                                        
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.6 8.3 8.9 9.2 9.2 9.0 8.8 8.6 8.3 8.5 9.2 9.4 9.2 8.8 8.2 8.1 7.9


...THOUSAND PEAKS RANCH (9600 FT)...

DATE             FRIDAY 11/05                    SATURDAY 11/06                  
TIME (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  

CLOUD COVER      FW  FW  FW  SC  SC  SC  SC  SC  SC  SC  SC  SC  SC  SC  SC  SC  SC
CLOUD COVER (%)  10  10  25  45  40  35  40  40  35  35  35  45  35  40  30  30  35
TEMPERATURE      32  33  46  48  42  38  38  37  37  37  47  48  43  39  39  36  35
MAX/MIN TEMP                     49              34              49              33
WIND DIR         SW  SW  SW  SW  SW   S  SE   S  SW  SW  SW  SW  SW   S   S   S   S
WIND (MPH)        5  11  13  13  10   9   9  11  10  16  17  19  16  12  16  17  16
WIND GUST (MPH)                                                                    
PRECIP PROB (%)   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5   5   5
PRECIP TYPE                                                                        
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.5 8.0 8.5 9.0 8.8 8.7 8.7 8.7 8.5 8.7 9.1 9.2 9.0 8.7 8.2 8.3 8.0

$$

--- PRECIP TYPE CODES ---

CODE   TYPE
 T     THUNDERSTORMS
 R     RAIN
 S     SNOW
 I     SLEET
 Z     FREEZING RAIN
`;
