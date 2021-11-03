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
FWUS45 KSLC 021405
AVGSLC

Avalanche Weather Guidance
National Weather Service Salt Lake City UT
805 AM MDT Tue Nov 2 2021

.DISCUSSION...
This is a test discussion from NWS SLC regarding avalanche content.
This discussion will be at the top of all of AVG products.  You're currently
viewing the one in the avgTestData.js testing data.

**********************Northern Wasatch Front***********************

...Nordic Valley (6991 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  BK  BK  SC  SC  FW  SC  SC  SC  SC  FW  SC  SC  FW  FW  FW
Cloud Cover (%)      75  65  65  45  25  20  35  50  45  30  25  35  35  20  15  20
Temperature          40  45  51  49  42  39  36  33  33  45  54  50  42  39  35  33
Max/Min Temp                     51              32              54              32
Wind Dir              W   W   W  NW   W  NW   E   E   E   S   W  NW   E   E   E   E
Wind (mph)            4   6   8   5   4   3   2   2   3   3   5   4   3   4   4   4
Wind Gust (mph)                                                                    
Precip Prob (%)      70  30  30  30  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           R   R   R   R                                                
12 Hour QPF                    0.12            0.01            0.00            0.00
12 Hour Snow                    0.0             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    8.6 8.4 8.4 8.4 8.2 8.1 7.9 7.8 7.2 7.5 8.2 8.3 8.2 8.2 8.1 8.1


...Powder Mountain (8488 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  OV  OV  BK  SC  FW  SC  SC  SC  SC  SC  SC  SC  FW  FW  FW
Cloud Cover (%)      85  80  75  55  40  25  40  50  50  35  30  30  35  25  20  15
Temperature          35  34  35  33  34  33  32  32  32  37  39  34  34  34  35  34
Max/Min Temp                     36              31              39              32
Wind Dir              W  NW  NW  NW   N   S   E   E   S   W  NW   W  SE  SE  SE  SE
Wind (mph)           11  11  11  10   8   9   6   6   5   5   5   6   6   9   9  10
Wind Gust (mph)                                                                    
Precip Prob (%)      90  30  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S   S                                                
12 Hour QPF                    0.17            0.01            0.00            0.00
12 Hour Snow                    0.5             0.1             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    8.6 8.5 8.5 8.4 8.2 8.1 7.9 7.8 7.4 7.8 8.4 8.4 8.4 8.2 8.0 8.0


...Snowbasin (8599 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  BK  BK  SC  FW  FW  SC  BK  BK  SC  SC  SC  SC  FW  FW  FW
Cloud Cover (%)      80  70  70  45  25  25  45  55  55  35  35  35  35  25  20  20
Temperature          31  31  33  30  30  29  28  27  27  31  35  30  30  31  30  30
Max/Min Temp                     34              26              35              28
Wind Dir              W   W   W  NW   S   E  NE   E  SE  SW  NW   W   E  SE  SE  SE
Wind (mph)           12  11  11  10   9   9   8   9   9   8   6   6   9  10  11  12
Wind Gust (mph)                                                                    
Precip Prob (%)      80  40  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S   S                                                
12 Hour QPF                    0.23            0.00            0.00            0.00
12 Hour Snow                    1.0             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    8.7 8.4 8.4 8.3 8.2 8.2 8.0 7.8 7.4 7.7 8.2 8.2 8.2 8.2 8.1 8.1


...Farmington Flats (7398 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  OV  BK  SC  SC  SC  SC  BK  BK  SC  SC  SC  SC  FW  FW  FW
Cloud Cover (%)      80  75  70  45  30  30  45  55  55  30  30  35  35  20  15  15
Temperature          37  42  42  37  37  36  33  33  33  42  45  37  36  36  33  33
Max/Min Temp                     42              32              45              33
Wind Dir              W   W   W  NW   N   W   E   E  SE   E  NW   N  SE  SE  SE  SE
Wind (mph)           10  11  11   9   6   6   3   3   4   6   6   5   6   6  10  10
Wind Gust (mph)                                                                    
Precip Prob (%)      80  40  30  30  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           R   R   R   S                                                
12 Hour QPF                    0.13            0.01            0.00            0.00
12 Hour Snow                    0.0             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    8.8 8.5 8.4 8.2 8.2 8.2 8.0 7.8 7.5 7.9 8.5 8.4 8.3 8.2 8.2 8.1


...Monte Cristo (7398 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  OV  OV  OV  SC  SC  SC  SC  BK  SC  SC  SC  SC  FW  FW  FW
Cloud Cover (%)      85  85  80  70  50  35  40  45  55  35  40  30  40  25  20  15
Temperature          37  39  42  38  36  36  34  34  33  41  45  40  36  37  35  35
Max/Min Temp                     42              32              45              34
Wind Dir              W   W  NW  NW   N  NE  NE   E   S   W   W  NW  SE  SE   S   S
Wind (mph)            9  11  10   8   6   5   5   4   4   5   4   5   5   6   6   6
Wind Gust (mph)                                                                    
Precip Prob (%)      90  30  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           R   R   R   R                                                
12 Hour QPF                    0.18            0.01            0.00            0.00
12 Hour Snow                    0.0             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    8.5 8.5 8.5 8.4 8.2 8.1 7.8 7.5 7.4 7.9 8.5 8.5 8.3 8.1 8.0 7.7


...Sessions Mountains (8397 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  OV  OV  BK  SC  FW  SC  BK  BK  SC  SC  SC  SC  FW  FW  FW
Cloud Cover (%)      85  80  70  55  30  25  40  50  55  30  30  30  35  20  15  20
Temperature          36  40  42  38  33  33  34  34  31  41  43  40  35  36  35  36
Max/Min Temp                     42              31              44              33
Wind Dir              W   W  NW  NW   N  SW  NE  NE   E   S  NW  NW  SE  SE  SE  SE
Wind (mph)           10  12  12   9   6   6   4   4   4   6   6   5   5   5   9   9
Wind Gust (mph)                                                                    
Precip Prob (%)      80  40  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S   S                                                
12 Hour QPF                    0.09            0.01            0.00            0.00
12 Hour Snow                    0.3             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    8.9 8.6 8.4 8.3 8.2 8.2 8.0 7.8 7.6 8.0 8.7 8.5 8.3 8.1 8.2 8.1


***********************Central Wasatch Front***********************

...Alta (8900 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  OV  OV  BK  SC  SC  SC  SC  BK  SC  SC  SC  SC  FW  FW  FW
Cloud Cover (%)      80  75  80  55  40  25  45  50  55  25  35  35  30  20  15  15
Temperature          32  32  33  31  29  28  27  27  27  34  37  34  30  31  30  31
Max/Min Temp                     34              27              37              29
Wind Dir              W   W  NW  NW  NW  NW  NW   W   W  NW  NW  SW  SW   S  SE  SE
Wind (mph)           12  12  12  12  10  11   5   5   5   6   5   5   8  10  11  11
Wind Gust (mph)                                                                    
Precip Prob (%)      70  40  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S   S                                                
12 Hour QPF                    0.06            0.01            0.00            0.00
12 Hour Snow                    0.5             0.1             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    9.0 8.9 8.7 8.3 8.1 8.2 8.0 7.8 7.5 8.1 9.0 8.8 8.1 8.1 8.1 8.0


...LCC - Alta/Snowbird (9436 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  OV  OV  BK  SC  SC  SC  SC  BK  SC  SC  SC  SC  FW  FW  FW
Cloud Cover (%)      80  75  75  55  40  30  50  50  55  25  35  35  30  20  20  15
Temperature          31  32  33  31  28  27  27  27  27  34  36  33  30  30  29  30
Max/Min Temp                     33              26              36              28
Wind Dir              W   W  NW  NW  NW  NW  NW   N   N  NW  NW  NW  SW   S  SE  SE
Wind (mph)           12  12  12  12  12  11   5   5   5   6   5   5   8  10  11  11
Wind Gust (mph)                                                                    
Precip Prob (%)      70  40  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S   S                                                
12 Hour QPF                    0.06            0.01            0.00            0.00
12 Hour Snow                    0.6             0.1             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    9.0 8.9 8.7 8.3 8.1 8.2 8.0 7.8 7.5 8.2 9.1 8.8 8.1 8.1 8.1 8.0


...LCC - Mid Canyon/Elberts (9298 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  OV  OV  BK  SC  SC  SC  SC  BK  SC  SC  SC  SC  FW  FW  FW
Cloud Cover (%)      80  80  75  55  40  25  45  50  55  25  30  35  30  20  20  15
Temperature          34  37  39  37  31  31  30  29  29  39  43  38  32  32  32  32
Max/Min Temp                     40              28              43              31
Wind Dir              W   W  NW  NW   N   N   W  NE  SW  NW  NW  NE   S  SE  SE  SE
Wind (mph)           11  11  11  10   9   9   5   4   4   5   4   5   8   9  10  10
Wind Gust (mph)                                                                    
Precip Prob (%)      70  40  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S   S                                                
12 Hour QPF                    0.05            0.01            0.00            0.00
12 Hour Snow                    0.3             0.1             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    9.0 8.9 8.7 8.3 8.1 8.2 8.0 7.8 7.5 8.2 9.0 8.7 8.1 8.1 8.1 8.1


...BCC - Brigton/Solitude (8757 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  BK  OV  BK  SC  SC  SC  SC  BK  FW  SC  SC  SC  FW  FW  FW
Cloud Cover (%)      75  65  75  55  40  30  50  50  55  25  35  35  30  20  15  15
Temperature          32  33  34  30  29  29  29  28  28  35  39  34  31  32  32  32
Max/Min Temp                     35              27              39              30
Wind Dir              W  NW  NW  NW  NW  NW  NW  NW  NW   N   N   W  SW   S  SE  SE
Wind (mph)           11  12  12  12  11  10   5   4   4   5   5   4   6  10  11  10
Wind Gust (mph)                                                                    
Precip Prob (%)      70  40  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S   S                                                
12 Hour QPF                    0.05            0.01            0.00            0.00
12 Hour Snow                    0.4             0.1             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    9.0 8.9 8.6 8.3 8.1 8.2 8.0 7.8 7.5 8.1 8.9 8.8 8.3 8.0 8.1 7.9


...BCC - Mid Canyon/Spruces (7398 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  OV  OV  SC  SC  FW  SC  BK  BK  SC  SC  SC  SC  FW  FW  FW
Cloud Cover (%)      85  80  75  50  35  25  45  50  55  30  30  30  30  20  15  15
Temperature          35  39  41  35  31  29  30  30  29  41  45  38  33  33  35  35
Max/Min Temp                     41              28              45              31
Wind Dir              W   W  NW   W   W   W   N  SE  SW  NW  NW   E   S   S  SE  SE
Wind (mph)            9  10  10   8   5   5   3   3   3   4   4   4   5   6   9   9
Wind Gust (mph)                                                                    
Precip Prob (%)      70  40  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S   S                                                
12 Hour QPF                    0.04            0.01            0.00            0.00
12 Hour Snow                    0.2             0.1             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    9.0 8.9 8.7 8.3 8.1 8.2 8.0 7.8 7.5 8.1 8.8 8.7 8.2 8.0 8.1 8.0


...Park City (6568 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  BK  OV  BK  SC  SC  SC  BK  BK  SC  SC  SC  SC  FW  FW  FW
Cloud Cover (%)      75  65  70  50  35  25  45  55  60  30  30  30  35  20  15  15
Temperature          38  45  49  46  37  34  31  28  30  45  52  48  38  34  31  29
Max/Min Temp                     49              28              52              29
Wind Dir              W  NW  NW  NW   W   W  SW   S   E   S  NW  NW  SE  SE  SE  SE
Wind (mph)            5   9  11   6   4   3   2   2   2   4   4   3   2   3   5   5
Wind Gust (mph)                                                                    
Precip Prob (%)      70  40  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           R   R   R   R                                                
12 Hour QPF                    0.02            0.01            0.00            0.00
12 Hour Snow                    0.0             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    8.9 8.8 8.6 8.3 8.1 8.2 8.0 7.7 7.4 7.8 8.4 8.6 8.3 8.0 7.9 7.7


...Park City Ridgeline (9570 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  BK  OV  BK  SC  SC  SC  SC  BK  FW  SC  SC  SC  FW  FW  FW
Cloud Cover (%)      75  65  75  50  40  30  45  50  55  25  30  30  30  20  15  15
Temperature          33  35  36  32  31  31  31  31  29  37  40  35  33  34  34  35
Max/Min Temp                     37              29              40              32
Wind Dir              W   W  NW  NW  NW  NW  NW  NW  SW   N   N   W   S   S  SE  SE
Wind (mph)           11  11  12  12   9   8   5   4   4   5   5   4   6   8  10  10
Wind Gust (mph)                                                                    
Precip Prob (%)      70  40  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S   S                                                
12 Hour QPF                    0.04            0.01            0.00            0.00
12 Hour Snow                    0.3             0.1             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    8.9 8.8 8.6 8.3 8.1 8.2 8.0 7.8 7.5 8.0 8.7 8.8 8.3 7.9 8.0 7.9


**********************Southern Wasatch Front***********************

...Aspen Grove (7300 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          BK  BK  BK  SC  FW  FW  SC  SC  BK  SC  FW  SC  SC  FW  FW  FW
Cloud Cover (%)      65  55  60  40  25  25  35  45  50  25  25  30  25  15  10  10
Temperature          37  45  45  36  32  29  31  30  30  43  47  36  31  30  31  31
Max/Min Temp                     45              28              47              30
Wind Dir              W   W  NW   W   W  SW  NW  NE   E   E  NW  NW  NE   E  SE  SE
Wind (mph)           10  10  12   9   6   8   5   5   4   5   4   4   5   6   9  11
Wind Gust (mph)                                                                    
Precip Prob (%)      50  30  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S   S                                                
12 Hour QPF                    0.03            0.00            0.00            0.00
12 Hour Snow                    0.0             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    8.9 8.9 8.7 8.3 7.9 8.1 8.0 7.7 7.3 7.9 8.7 8.7 8.4 8.1 8.1 7.9


...Soldier Hollow (5804 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          BK  BK  OV  SC  SC  FW  SC  SC  BK  FW  SC  SC  SC  FW  FW  FW
Cloud Cover (%)      65  60  70  45  30  25  40  45  50  25  25  25  30  20  10  10
Temperature          38  43  51  48  41  36  32  31  30  41  52  49  42  38  34  32
Max/Min Temp                     51              29              53              31
Wind Dir              S   W  NW   N  NW  NW  NW  NE  SE  SE  NE   W   E  SE  SE  SE
Wind (mph)            4   6  10   5   3   3   2   2   2   3   4   3   2   2   4   4
Wind Gust (mph)                                                                    
Precip Prob (%)      60  30  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           R   R   R   R                                                
12 Hour QPF                    0.02            0.01            0.00            0.00
12 Hour Snow                    0.0             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    8.9 8.9 8.6 8.2 8.0 8.1 7.9 7.6 7.1 7.7 8.3 8.7 8.4 8.0 8.0 7.8


...Sundance (6690 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          BK  BK  BK  SC  FW  FW  SC  SC  BK  SC  FW  SC  FW  FW  FW  FW
Cloud Cover (%)      65  55  65  40  20  20  35  45  50  25  25  25  25  15  10  10
Temperature          41  50  55  52  46  42  38  37  35  49  56  53  46  43  39  38
Max/Min Temp                     55              34              56              37
Wind Dir              S  SW   W  SW  SE   E  NE  NE  NE  NE  NW   W  NE   E   E   E
Wind (mph)            8   9  10   8   4   5   3   3   3   5   6   5   3   4   6   6
Wind Gust (mph)                                                                    
Precip Prob (%)      50  30  30  30  10   0   0   0   0   0   0   0   0   0   0   0
Precip Type           R   R   R                                                    
12 Hour QPF                    0.03            0.00            0.00            0.00
12 Hour Snow                    0.0             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    8.9 8.9 8.7 8.3 8.0 8.1 7.9 7.7 7.3 7.8 8.4 8.6 8.3 8.1 8.1 7.9


...Bunnels Fork (7904 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          BK  BK  BK  SC  FW  FW  SC  SC  SC  SC  FW  SC  SC  FW  FW  FW
Cloud Cover (%)      65  55  60  40  25  20  35  45  50  30  25  25  30  15  10  10
Temperature          37  41  43  38  37  35  35  34  34  41  45  41  39  38  38  38
Max/Min Temp                     44              33              45              36
Wind Dir             SW   W   W   W   S  SE   E   E  NE   E  NW  NW   E  SE   E   E
Wind (mph)            9  11  12   9   5   6   5   5   3   5   6   5   4   6   6   9
Wind Gust (mph)                                                                    
Precip Prob (%)      50  30  40  40  10   0   0   0   0   0   0   0   0   0   0   0
Precip Type           R   R   S                                                    
12 Hour QPF                    0.03            0.00            0.00            0.00
12 Hour Snow                    0.0             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    8.9 8.9 8.7 8.3 8.0 8.2 8.0 7.7 7.4 7.8 8.4 8.5 8.3 8.1 8.1 8.0


...Provo Peak Area (10197 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          BK  BK  BK  SC  SC  FW  SC  SC  BK  SC  SC  SC  SC  FW  FW  FW
Cloud Cover (%)      65  55  65  35  25  25  40  45  55  30  30  30  30  15  15  10
Temperature          34  34  36  34  31  31  30  30  30  34  37  35  33  32  31  32
Max/Min Temp                     36              29              37              31
Wind Dir              W  NW  NW  NW  NW   S   W  NE   N  SW  NW  NW  NE   E  SE   E
Wind (mph)           11  12  12  12   8   8   5   5   5   5   5   5   6   8   9   9
Wind Gust (mph)                                                                    
Precip Prob (%)      50  30  40  40  10   0   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S                                                    
12 Hour QPF                    0.04            0.00            0.00            0.00
12 Hour Snow                    0.3             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    9.0 8.9 8.8 8.4 8.1 8.3 8.1 7.9 7.5 8.0 8.7 8.5 8.3 8.0 8.0 7.9


****************************Logan Area*****************************

...Cherry Peak (7451 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  OV  OV  BK  SC  FW  SC  SC  SC  SC  SC  SC  SC  FW  FW  FW
Cloud Cover (%)      85  80  80  70  40  25  35  50  50  30  30  40  45  25  20  20
Temperature          36  36  40  38  37  36  35  36  35  40  43  39  37  38  37  38
Max/Min Temp                     40              35              43              36
Wind Dir             NW   W   W   W   N  NE  NE  NE  SW   W   W  NE  SE  SE  SE  SE
Wind (mph)            5   8   9   6   5   5   4   4   3   4   4   3   4   5   6   6
Wind Gust (mph)                                                                    
Precip Prob (%)      90  30  30  30  10   0   0   0   0   0   0   0   0   0   0   0
Precip Type           R   R   R                                                    
12 Hour QPF                    0.15            0.00            0.00            0.00
12 Hour Snow                    0.0             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    8.3 8.3 8.4 8.3 8.0 8.0 7.8 7.7 7.4 7.7 8.0 8.2 8.0 7.8 7.7 7.6


...Beaver Mountain (6880 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  OV  OV  OV  BK  SC  SC  BK  SC  SC  SC  SC  SC  FW  SC  FW
Cloud Cover (%)      80  80  75  70  50  35  40  55  50  35  35  35  45  25  25  25
Temperature          35  41  42  40  35  31  29  28  28  43  45  41  32  30  28  28
Max/Min Temp                     42              28              45              28
Wind Dir              W   W  NW  NW  NW  NW   N  NW  SW  SW   W   W  SW   S  SE  SE
Wind (mph)            9  13  13  11   6   5   1   1   3   9   8   5   1   3   6   6
Wind Gust (mph)                                                                    
Precip Prob (%)      90  50  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S   S                                                
12 Hour QPF                    0.09            0.01            0.00            0.00
12 Hour Snow                    0.1             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    8.4 8.4 8.4 8.3 8.0 7.9 7.6 7.4 7.4 7.9 8.5 8.3 8.2 7.9 7.8 7.5


...Tony Grove (8799 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  OV  OV  OV  BK  SC  SC  BK  SC  SC  SC  SC  SC  FW  FW  FW
Cloud Cover (%)      85  85  75  75  50  30  35  50  50  30  35  35  45  25  20  20
Temperature          34  36  34  33  30  27  30  29  30  37  39  34  29  28  33  33
Max/Min Temp                     37              26              39              27
Wind Dir              W   W   W  NW  NW  NW   W   W  NW   W   W  SW   W  SE  SE  SE
Wind (mph)           11  16  16  13  10   8   4   3   5  10   9   6   6   6   9   9
Wind Gust (mph)                                                                    
Precip Prob (%)      90  40  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S   S                                                
12 Hour QPF                    0.17            0.01            0.00            0.00
12 Hour Snow                    1.5             0.1             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    8.4 8.4 8.5 8.4 8.0 8.0 7.8 7.6 7.4 8.0 8.5 8.4 8.2 7.8 7.8 7.7


...Wellsville Mountains (8780 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  BK  BK  SC  SC  FW  SC  SC  SC  SC  SC  SC  SC  FW  FW  FW
Cloud Cover (%)      70  55  65  50  25  20  45  50  50  30  35  35  40  25  20  25
Temperature          35  35  37  35  34  33  33  32  32  36  38  37  35  34  34  33
Max/Min Temp                     37              32              39              33
Wind Dir              W   W   W  NW   W  SW  SE   S  SW   W  NW   W  SE  SE  SE  SE
Wind (mph)           10  10  10   9   8   8   8   8   6   5   5   5   6   9  10  11
Wind Gust (mph)                                                                    
Precip Prob (%)      80  20  30  30  10   0   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S                                                    
12 Hour QPF                    0.11            0.00            0.00            0.00
12 Hour Snow                    0.6             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    8.4 8.3 8.4 8.4 8.0 8.0 7.9 7.8 7.5 7.6 8.1 8.2 8.2 8.1 8.1 8.2


**************************Western Uintas***************************

...Christmas Meadows (8573 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  OV  OV  OV  OV  BK  SC  SC  BK  SC  FW  SC  SC  SC  FW  FW
Cloud Cover (%)      95  90  85  90  80  55  45  45  50  35  25  35  35  25  20  15
Temperature          33  39  42  38  31  28  24  22  26  42  46  40  28  25  26  26
Max/Min Temp                     42              21              46              25
Wind Dir              W   W   W  NW  NW   S   S  SE  SW  NW  NW  NW   S   S   S   S
Wind (mph)            9  11  11   8   3   2   2   2   3   4   5   3   2   3   6   6
Wind Gust (mph)                                                                    
Precip Prob (%)      90  60  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S   S                                                
12 Hour QPF                    0.09            0.03            0.00            0.00
12 Hour Snow                    0.5             0.2             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    9.0 9.0 8.8 8.5 8.2 8.0 7.7 7.3 7.4 8.0 8.7 8.7 8.2 7.5 7.4 7.4


...Mirror Lake (10525 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  OV  OV  OV  BK  SC  SC  SC  BK  SC  SC  SC  SC  SC  FW  FW
Cloud Cover (%)      90  90  80  80  60  45  40  50  55  35  30  40  35  30  20  15
Temperature          32  30  31  29  27  26  24  24  25  33  36  29  26  27  27  28
Max/Min Temp                     32              22              36              26
Wind Dir              W  NW  NW  NW   N  SW   N   N  SW  NW  NW   W  SE  SE   S   S
Wind (mph)           12  13  12  12  11  10   5   5   5   6   5   3   4   5   6   6
Wind Gust (mph)                                                                    
Precip Prob (%)      90  60  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S   S                                                
12 Hour QPF                    0.16            0.02            0.00            0.00
12 Hour Snow                    1.5             0.2             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    9.1 9.0 8.9 8.4 8.0 8.0 7.7 7.3 7.4 8.2 9.0 9.0 8.2 7.6 7.7 7.5


...Samak (7648 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  OV  OV  BK  SC  SC  SC  SC  BK  SC  FW  SC  SC  FW  FW  FW
Cloud Cover (%)      90  80  75  65  45  30  35  45  50  35  20  30  35  25  20  10
Temperature          35  39  42  39  32  29  25  24  29  41  45  41  31  29  28  28
Max/Min Temp                     42              24              45              28
Wind Dir              W  NW  NW  NW   W   N   E   E   S   W   W   W   E   E  SE  SE
Wind (mph)            6   9  10   8   4   4   2   2   2   3   3   1   2   3   4   4
Wind Gust (mph)                                                                    
Precip Prob (%)      70  40  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S   S                                                
12 Hour QPF                    0.06            0.01            0.00            0.00
12 Hour Snow                    0.1             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    9.0 9.0 8.9 8.4 8.0 7.9 7.6 7.2 7.2 8.0 8.8 8.7 8.2 7.9 7.9 7.7


...Wolf Creek Pass (9797 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  OV  OV  BK  BK  SC  SC  SC  BK  SC  SC  SC  SC  SC  FW  FW
Cloud Cover (%)      85  75  75  70  50  30  35  45  55  40  25  30  35  30  20  10
Temperature          35  35  38  34  29  28  26  25  30  38  42  36  28  28  28  28
Max/Min Temp                     38              24              42              27
Wind Dir             NW  NW  NW  NW  NW  NW  NW   W  NW  NW   W  SW   E  SE  NE   E
Wind (mph)           12  12  12  12  10   8   5   4   4   5   5   3   4   4   5   6
Wind Gust (mph)                                                                    
Precip Prob (%)      70  30  40  40  20   0   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S   S                                                
12 Hour QPF                    0.07            0.01            0.00            0.00
12 Hour Snow                    0.5             0.1             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)    9.0 9.1 9.0 8.5 8.1 8.1 7.7 7.4 7.4 8.1 8.8 8.8 8.3 7.9 8.0 7.7


...Thousand Peaks Ranch (9600 ft)...

Date             Tuesday 11/02                   Wednesday 11/03                 
Time (LT)        06  09  12  15  18  21  00  03  06  09  12  15  18  21  00  03  06
                 6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  

Cloud Cover          OV  OV  OV  OV  BK  SC  SC  SC  BK  SC  SC  SC  SC  FW  FW  FW
Cloud Cover (%)      95  90  85  80  65  40  35  45  55  35  30  30  35  25  15  10
Temperature          33  36  38  35  31  30  26  26  27  39  42  37  31  31  29  29
Max/Min Temp                     39              25              43              28
Wind Dir              W   W   W  NW  SW  NE   E   E   S  NW  NW   W  SE  SE   S   S
Wind (mph)           10  11  11   8   4   4   4   4   3   4   5   4   4   5   6   6
Wind Gust (mph)                                                                    
Precip Prob (%)     100  50  50  50  20   5   0   0   0   0   0   0   0   0   0   0
Precip Type           S   S   S   S                                                
12 Hour QPF                    0.12            0.02            0.00            0.00
12 Hour Snow                    0.5             0.1             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)   10.010.0 9.9 9.5 9.110.010.711.310.411.212.810.810.310.710.710.6

$$

--- Precip Type Codes ---

CODE   TYPE
 T     Thunderstorms
 R     Rain
 S     Snow
 I     Sleet
 Z     Freezing Rain
`;