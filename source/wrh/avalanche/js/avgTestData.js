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
WUS45 KSLC 011903
AVGSLC

Avalanche Weather Guidance
National Weather Service Salt Lake City UT
103 PM MDT Mon Nov 1 2021

**********************Northern Wasatch Front***********************

...Nordic Valley (6991 ft)...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  BK  BK  BK  SC  SC  SC  SC  BK  SC  SC  SC
Cloud Cover (%)  95  95 100 100  90  75  60  55  50  50  45  35  45  55  40  40  35
Temperature      53  50  47  41  40  38  45  50  48  43  40  36  35  33  45  53  49
Min/Max Temp                     38              51              32              53
Wind Dir          W   W   S   S   S   W   W   W   W  NE   E  NE   E   E  SW   W   W
Wind (mph)        4   5   4   4   2   6   8   9   5   3   3   3   4   4   3   5   5
Wind Gust (mph)                                                                    
Precip Prob (%)  10  20  50  80  90  80  60  40  30  10  10   5   5   5   5   5   5
Precip Type       R   R   R   S   S   S   R   R                                    
12 Hour QPF                    0.17            0.11            0.03            0.00
12 Hour Snow                    0.0             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.3 9.2 7.9 7.6 7.8 7.8 8.6 8.6 8.6 8.4 8.3 8.1 7.9 7.6 7.8 8.1 8.2


...Powder Mountain (8488 ft)...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  OV  OV  BK  BK  SC  SC  SC  BK  BK  SC  SC
Cloud Cover (%)  95  95  95 100  90  90  85  75  60  55  45  45  50  60  50  45  35
Temperature      39  41  33  33  35  35  36  35  34  34  34  33  33  31  36  38  33
Min/Max Temp                     32              37              31              38
Wind Dir         SW  SW  SW  SW   W   W   W   W  NW  NW  NW   N  NE   E   W   W   W
Wind (mph)        8   8   9   8   9  12  10  10   9   5   6   6   8   8   8   9   9
Wind Gust (mph)                                                                    
Precip Prob (%)  10  20  50  80  90  80  60  40  40  10  10  10  10   5   5   5   5
Precip Type       R   S   S   S   S   S   S   S                                    
12 Hour QPF                    0.19            0.08            0.03            0.00
12 Hour Snow                    1.2             0.2             0.1             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.3 9.2 7.9 7.9 8.1 8.2 8.7 8.7 8.6 8.5 8.3 8.1 7.8 7.5 7.8 8.2 8.3


...Snowbasin (8599 ft)...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  BK  BK  BK  SC  SC  SC  BK  BK  SC  SC  SC
Cloud Cover (%)  95  95 100 100  90  80  60  55  60  45  50  45  50  65  50  40  40
Temperature      37  38  34  33  33  32  31  33  31  31  32  31  30  28  32  34  30
Min/Max Temp                     32              34              28              35
Wind Dir         SW  SW   W   W   W   W   W   W   W  NW  NE  NE  NE   E   W   W   W
Wind (mph)        9   9   9   9  10  13  11  11  10   8   8   9  11  11   9  10  10
Wind Gust (mph)                                                                    
Precip Prob (%)   5  20  50  80  90  70  50  40  30  10  10   5   5   5   5   5   5
Precip Type       R   S   S   S   S   S   S   S                                    
12 Hour QPF                    0.19            0.10            0.01            0.00
12 Hour Snow                    1.3             0.5             0.1             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.4 9.3 8.1 8.0 8.3 8.2 8.7 8.7 8.6 8.4 8.2 8.1 8.0 7.7 7.9 8.1 8.2


...Farmington Flats (7398 ft)...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  BK  BK  BK  BK  SC  SC  BK  BK  SC  SC  SC
Cloud Cover (%)  95  95  95 100  90  75  65  55  55  50  40  45  55  65  50  40  40
Temperature      43  43  40  37  37  37  42  41  36  37  37  35  34  34  42  43  35
Min/Max Temp                     36              42              33              44
Wind Dir         SW  SW  SW  SW   W   W   W   W   W   W  SE   E   E   E   W   W  NW
Wind (mph)        8   6   6  10   4  12  11  11  10   5   6   8   8   9   8   9   9
Wind Gust (mph)                                                                    
Precip Prob (%)   5  20  40  80  90  70  50  40  30  10  10  10  10   5   5   5   5
Precip Type       R   R   R   S   S   S   R   R                                    
12 Hour QPF                    0.24            0.07            0.01            0.00
12 Hour Snow                    0.0             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.5 9.4 7.6 7.7 8.1 8.0 8.8 8.6 8.5 8.4 8.2 8.1 8.0 7.7 7.9 8.2 8.3


...Monte Cristo (7398 ft)...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  OV  OV  OV  BK  SC  SC  BK  BK  BK  BK  SC
Cloud Cover (%)  90  95  95 100  95  95  85  80  80  65  50  40  55  65  50  50  40
Temperature      43  42  37  37  37  36  40  41  36  36  36  33  33  32  39  44  39
Min/Max Temp                     36              41              32              44
Wind Dir         SW  SE  SE   S   W   W   W   W  NW   W  NW  NW  NE  SE   W   W   W
Wind (mph)        5   6   6   6   5  11  11  11   9   5   5   6   6   6   6   6   8
Wind Gust (mph)                                                                    
Precip Prob (%)  20  20  50  80  90  80  60  40  30  10  10   5   5   5   5   5   5
Precip Type       R   R   S   S   S   S   R   R                                    
12 Hour QPF                    0.19            0.07            0.02            0.00
12 Hour Snow                    0.0             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.3 9.2 7.5 7.5 7.8 7.8 8.8 8.7 8.6 8.5 8.3 8.0 7.6 7.3 7.8 8.3 8.4


...Sessions Mountains (8397 ft)...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  OV  BK  BK  BK  SC  SC  BK  BK  SC  SC  SC
Cloud Cover (%)  95  95  95 100  90  75  80  70  60  50  40  40  55  70  50  40  40
Temperature      45  41  37  36  36  35  40  40  37  36  36  36  36  32  40  43  38
Min/Max Temp                     35              42              32              43
Wind Dir         SW  SW  SW  SW   W   W   W   W   W   W  SW   E   E   E   W   W  NW
Wind (mph)       10   6   8   9   6  11  12  13  10   5   5   8   6   9  10  10   9
Wind Gust (mph)                                                                    
Precip Prob (%)   5  10  40  80  90  70  50  40  20  10  10  10  10   5   5   5   5
Precip Type           S   S   S   S   S   S   S                                    
12 Hour QPF                    0.20            0.11            0.01            0.00
12 Hour Snow                    0.8             0.3             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.5 9.4 8.0 7.9 8.1 8.1 8.8 8.7 8.5 8.4 8.2 8.1 8.0 7.7 8.0 8.3 8.3


***********************Central Wasatch Front***********************

...Alta ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  OV  OV  BK  SC  SC  SC  BK  OV  SC  SC  SC
Cloud Cover (%)  95  95  95 100  85  75  80  75  65  50  35  45  65  75  50  45  45
Temperature      36  36  35  35  34  32  33  34  32  30  30  30  29  28  34  36  32
Min/Max Temp                     32              34              28              36
Wind Dir         SW  SW  SW   W   W   W   W   W  NW  NW  NW  NW  NW  NW   W  NW  NW
Wind (mph)       11  11  12  13   9  14  11  12  12  10  11  11  11  11   9   8   8
Wind Gust (mph)                                                                    
Precip Prob (%)   5  10  30  80  90  70  50  30  20  10  10   5   5   5   5   5   5
Precip Type           S   S   S   S   S   S   S                                    
12 Hour QPF                    0.21            0.14            0.01            0.00
12 Hour Snow                    1.9             1.3             0.1             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.4 9.3 9.2 9.2 9.0 9.0 9.0 9.0 8.8 8.4 8.1 8.0 7.9 7.5 8.0 8.5 8.6


...LCC - Alta/Snowbird...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  OV  OV  BK  SC  SC  SC  BK  OV  BK  SC  SC
Cloud Cover (%)  95  95  95 100  85  75  75  80  60  50  40  45  65  75  50  45  45
Temperature      35  36  35  34  34  32  32  33  31  30  29  29  29  28  33  35  31
Min/Max Temp                     32              33              27              35
Wind Dir         SW  SW  SW  SW   W   W   W  NW  NW  NW  NW  NW  NW  NW   W  NW  NW
Wind (mph)       11  11  12  13   8  14  11  12  12  10  11  12  12  11   9   8   8
Wind Gust (mph)                                                                    
Precip Prob (%)   5  10  30  80  90  70  50  30  20  10  10   5   5   5   5   5   5
Precip Type           S   S   S   S   S   S   S                                    
12 Hour QPF                    0.21            0.14            0.01            0.00
12 Hour Snow                    1.9             1.3             0.1             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.4 9.3 9.2 9.1 9.0 8.9 9.0 9.0 8.8 8.4 8.1 8.0 7.9 7.5 8.1 8.5 8.6


...LCC - Mid Canyon/Elberts (9298 ft)...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  OV  OV  BK  SC  SC  SC  BK  OV  SC  SC  SC
Cloud Cover (%)  95  95  95 100  85  75  80  75  65  45  35  45  65  75  50  45  45
Temperature      43  39  37  37  36  34  37  38  36  32  32  31  31  30  37  41  37
Min/Max Temp                     33              39              29              41
Wind Dir         SW  SW  SW   W   W   W   W  NW  NW  NW  NW   N   N   N   W  NW  NW
Wind (mph)        9  10  11  12   6  12  11  11  10   9   9  10  10   9   8   6   6
Wind Gust (mph)                                                                    
Precip Prob (%)   5  10  30  80  90  70  50  30  20  10  10   5   5   5   5   5   5
Precip Type           S   S   S   S   S   S   S                                    
12 Hour QPF                    0.22            0.15            0.01            0.00
12 Hour Snow                    1.2             0.8             0.1             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.4 9.3 9.0 8.9 8.8 8.7 9.0 9.0 8.8 8.4 8.1 8.0 7.9 7.6 8.0 8.5 8.6


...BCC - Brigton/Solitude ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  BK  BK  BK  BK  SC  SC  BK  OV  SC  SC  SC
Cloud Cover (%)  95  95  95 100  85  75  70  70  60  55  40  45  60  70  45  40  40
Temperature      37  37  35  34  33  32  33  34  31  31  31  31  31  29  33  36  31
Min/Max Temp                     32              34              29              36
Wind Dir         SW  SW  SW  SW   W   W   W   W  NW  NW  NW  NW  NW  NW  NW  NW  NW
Wind (mph)       10  10  11  12   6  12  11  12  11   9  10  10  10  10   8   8   8
Wind Gust (mph)                                                                    
Precip Prob (%)   5  10  30  70  90  70  50  40  20  10  10   5   5   5   5   5   5
Precip Type           S   S   S   S   S   S   S                                    
12 Hour QPF                    0.14            0.10            0.00            0.00
12 Hour Snow                    1.0             0.7             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.4 9.3 9.1 9.0 9.0 8.9 9.1 8.9 8.8 8.4 8.1 8.0 7.9 7.5 8.0 8.5 8.6


...BCC - Mid Canyon/Spruces ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  OV  OV  BK  SC  SC  SC  BK  OV  BK  SC  SC
Cloud Cover (%)  95  95  95 100  85  75  80  75  65  50  35  45  60  70  50  40  40
Temperature      44  41  37  38  37  36  39  38  37  33  33  34  32  31  40  43  36
Min/Max Temp                     35              41              30              43
Wind Dir         SW  SW  SW   W  SW   W   W   W   W   W   W   W  NW   N   W  NW  NW
Wind (mph)        9   9   9   9   4  11  10  10   8   5   6   9   8   8   6   6   6
Wind Gust (mph)                                                                    
Precip Prob (%)   5  10  30  80  90  70  50  40  20  10  10   5   5   5   5   5   5
Precip Type           S   S   S   S   S   S   S                                    
12 Hour QPF                    0.18            0.12            0.01            0.00
12 Hour Snow                    0.9             0.5             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.4 9.3 8.7 8.6 8.6 8.6 9.0 9.0 8.8 8.4 8.1 8.0 7.9 7.5 8.0 8.5 8.6


...Park City ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  BK  BK  BK  BK  SC  SC  BK  OV  SC  SC  SC
Cloud Cover (%)  95  95  95 100  90  75  60  55  55  60  45  45  60  70  50  40  35
Temperature      52  45  43  40  38  37  46  49  46  39  35  33  31  32  45  51  46
Min/Max Temp                     37              49              30              51
Wind Dir          W  SW   W  SE   W  NW  NW  NW  NW   W   W  SW   E   E  NW  NW  NW
Wind (mph)        3   4   5   4   2   6   9  11   8   3   4   4   4   4   5   6   5
Wind Gust (mph)                                                                    
Precip Prob (%)   5  10  20  70  90  70  50  40  30  10  10   5   5   5   5   5   5
Precip Type           R   R   R   R   R   R   R                                    
12 Hour QPF                    0.07            0.06            0.00            0.00
12 Hour Snow                    0.0             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.4 9.2 8.2 7.9 7.8 8.1 8.9 8.8 8.6 8.4 8.2 8.0 7.8 7.4 8.0 8.4 8.6


...Park City Ridgeline ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  BK  BK  BK  BK  SC  SC  BK  OV  SC  SC  SC
Cloud Cover (%)  95  95  95 100  85  70  60  60  60  55  40  45  60  70  45  40  35
Temperature      41  40  38  36  33  33  35  35  34  32  33  33  33  30  35  39  35
Min/Max Temp                     33              37              30              39
Wind Dir         SW  SW  SW  SW   W   W   W   W   W  NW   W   W  NW  NW  NW  NW  NW
Wind (mph)       10  10  10  10   6  11  11  12  11   9   8   9   9   8   6   8   8
Wind Gust (mph)                                                                    
Precip Prob (%)   5  10  30  80  90  70  50  40  20  10  10   5   5   5   5   5   5
Precip Type           S   S   S   S   S   S   S                                    
12 Hour QPF                    0.12            0.09            0.00            0.00
12 Hour Snow                    0.6             0.6             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.4 9.2 8.8 8.8 8.8 8.8 9.0 8.9 8.7 8.4 8.2 8.0 7.9 7.5 8.0 8.5 8.6


**********************Southern Wasatch Front***********************

...Aspen Grove ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  BK  BK  BK  BK  SC  SC  SC  BK  BK  BK  SC  SC
Cloud Cover (%)  95  95  90  95  80  65  60  65  65  50  30  35  55  65  50  35  35
Temperature      42  40  40  40  36  36  41  41  35  32  31  31  30  32  43  45  34
Min/Max Temp                     35              44              30              46
Wind Dir         SW  SW   W  SW  SW   W   W   W   W  NW  NW   N  NE  NE   W   W  NW
Wind (mph)       10  10  10  10   8  11  10  11  10   8   8   9  11   9   6   8   8
Wind Gust (mph)                                                                    
Precip Prob (%)   5  10  30  70  80  60  40  30  20  10  10   5   5   5   5   5   5
Precip Type           R   R   S   S   S   S   S                                    
12 Hour QPF                    0.11            0.09            0.01            0.00
12 Hour Snow                    0.0             0.3             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.4 9.3 8.4 8.3 8.2 8.3 9.0 8.9 8.7 8.4 8.2 7.9 7.9 7.6 8.0 8.5 8.6


...Soldier Hollow ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  BK  OV  OV  OV  SC  SC  SC  BK  BK  SC  SC  SC
Cloud Cover (%)  90  95  95  95  80  65  70  70  70  50  35  40  55  65  45  35  35
Temperature      53  49  45  42  40  38  42  49  47  42  38  34  33  32  41  51  48
Min/Max Temp                     38              49              32              51
Wind Dir         SW  SW   W   N  SW   S   S  NW  NW   N   N   N  NE  NE  NW  NW  NW
Wind (mph)        6   4   5   4   2   5   5   9   6   3   3   3   4   4   3   6   5
Wind Gust (mph)                                                                    
Precip Prob (%)   5   5  20  70  80  60  40  30  20  10  10   5   5   5   5   5   5
Precip Type           R   R   R   R   R   R   R                                    
12 Hour QPF                    0.05            0.03            0.00            0.00
12 Hour Snow                    0.0             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.4 9.3 8.7 8.4 8.4 8.3 9.1 8.9 8.7 8.4 8.2 7.9 7.8 7.5 8.0 8.5 8.7


...Sundance ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  BK  BK  BK  SC  SC  SC  BK  BK  SC  SC  SC
Cloud Cover (%)  90  95  90  95  85  70  65  65  65  50  30  35  55  65  50  35  30
Temperature      59  54  52  48  45  41  49  53  52  46  43  40  38  37  48  54  53
Min/Max Temp                     41              53              36              55
Wind Dir         SW   S  SW  SE  SW   W   W   W   W  NW  NE  NE  NE  NE  NW   W  NW
Wind (mph)        9   6   8  10   4   8  10  11   9   4   4   6   8   6   5   6   6
Wind Gust (mph)                                                                    
Precip Prob (%)   5   5  20  60  80  60  40  30  20  10  10   5   5   5   5   5   5
Precip Type           R   R   R   R   R   R   R                                    
12 Hour QPF                    0.09            0.08            0.01            0.00
12 Hour Snow                    0.0             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.4 9.4 8.5 8.3 8.2 8.2 9.0 9.0 8.7 8.4 8.2 8.0 7.9 7.6 8.0 8.4 8.6


...Bunnels Fork ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  BK  BK  BK  SC  SC  SC  BK  BK  SC  SC  SC
Cloud Cover (%)  90  95  90  95  80  70  65  65  65  50  30  35  55  65  50  35  30
Temperature      45  46  42  39  38  37  41  41  39  38  38  37  35  34  40  43  38
Min/Max Temp                     36              43              34              43
Wind Dir         SW  SW   S  SW  SW   W   W   W   W  NW   E  NE  NE  NE   W   W   W
Wind (mph)       11   9   9  10   8  10  11  12  11   6   6   8   9   6   6   8   8
Wind Gust (mph)                                                                    
Precip Prob (%)   5   5  20  60  80  60  40  30  30  10  10   5   5   5   5   5   5
Precip Type           R   R   S   S   S   R   R                                    
12 Hour QPF                    0.09            0.08            0.01            0.00
12 Hour Snow                    0.0             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.4 9.4 8.6 8.4 8.3 8.3 9.0 9.0 8.8 8.5 8.3 8.0 7.9 7.6 8.0 8.4 8.6


...Provo Peak Area ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  BK  BK  BK  BK  SC  SC  SC  BK  OV  SC  SC  SC
Cloud Cover (%)  90  95  95  95  80  70  60  60  55  50  30  40  55  70  50  40  35
Temperature      39  39  35  34  32  33  34  35  33  32  32  31  30  30  33  36  33
Min/Max Temp                     32              35              29              36
Wind Dir          W  SW  SW  SW   W   W  NW   W  NW  NW   N   N   N  NE   W   W   W
Wind (mph)       11   9  10  10   8  11  12  12  11   9   9   9   9   8   8   8   8
Wind Gust (mph)                                                                    
Precip Prob (%)   0   5  20  70  80  60  50  30  30  10  10   5   5   5   5   5   5
Precip Type           S   S   S   S   S   S   S                                    
12 Hour QPF                    0.14            0.10            0.01            0.00
12 Hour Snow                    1.1             0.7             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.4 9.4 8.3 8.2 8.2 8.2 9.0 9.0 8.8 8.6 8.3 8.1 8.0 7.7 8.0 8.3 8.5


****************************Logan Area*****************************

...Cherry Peak ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  OV  OV  OV  BK  BK  SC  BK  BK  SC  SC  SC
Cloud Cover (%)  95  95  95 100  95  85  80  80  80  60  55  45  50  55  50  45  45
Temperature      42  43  39  36  38  36  37  41  39  39  39  38  36  35  39  42  38
Min/Max Temp                     36              41              35              42
Wind Dir          S   S  SW  SW   W   W   W   W   W   W   W  NE  NE   E   W   W   W
Wind (mph)        5   6   6   6   6   6   9   9   8   5   4   5   6   4   5   5   5
Wind Gust (mph)                                                                    
Precip Prob (%)  20  20  50  80  90  80  50  40  40  10  10   5   5   5   5   5   5
Precip Type       R   R   S   S   S   S   R   R                                    
12 Hour QPF                    0.20            0.11            0.01            0.00
12 Hour Snow                    0.0             0.0             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.2 9.0 7.7 7.6 7.8 7.7 8.5 8.6 8.7 8.5 8.2 7.8 7.5 7.0 7.6 8.0 8.1


...Beaver Mountain ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  OV  OV  OV  BK  BK  SC  BK  BK  SC  SC  SC
Cloud Cover (%)  95  90  90  95  95  80  85  70  80  70  55  45  55  55  50  45  40
Temperature      44  37  34  34  34  34  40  42  39  33  31  30  29  29  42  45  40
Min/Max Temp                     34              42              29              45
Wind Dir          S   W  SW  SW   W   W   W   W   W   W   W  NW  NW  NE   W   W   W
Wind (mph)        8   5   6   6   3  12  13  14  12   5   4   5   8   6  10  10  11
Wind Gust (mph)                                                                    
Precip Prob (%)  20  30  60  80  90  80  60  40  40  20  20   5   5   5   5   5   5
Precip Type       R   R   S   S   S   S   S   R   S   S                            
12 Hour QPF                    0.21            0.10            0.01            0.00
12 Hour Snow                    0.7             0.3             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.2 9.0 7.6 7.6 7.7 7.6 8.5 8.7 8.6 8.5 8.1 7.8 7.3 7.0 7.5 8.1 8.1


...Tony Grove ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  OV  OV  OV  BK  BK  SC  BK  BK  BK  SC  SC
Cloud Cover (%)  95  95  95  95 100  85  90  90  80  65  60  45  55  60  50  50  45
Temperature      33  32  32  33  33  33  33  33  33  28  26  32  30  30  36  38  33
Min/Max Temp                     31              36              26              38
Wind Dir         SW  SW  SW  SW   W   W   W   W   W   W  NW  NW  NW  NW   W   W   W
Wind (mph)       10   9   9  11   9  14  16  16  14   9   8   9   9   8  11  11  11
Wind Gust (mph)                                                                    
Precip Prob (%)  20  30  60  80  90  80  60  40  40  20  20   5   5   5   5   5   5
Precip Type       S   S   S   S   S   S   S   S   S   S                            
12 Hour QPF                    0.37            0.29            0.03            0.00
12 Hour Snow                    2.3             2.2             0.2             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.2 9.1 8.7 8.5 8.5 8.4 8.6 8.7 8.7 8.5 8.2 7.8 7.4 7.0 7.6 8.1 8.1


...Wellsville Mountains ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  BK  BK  BK  BK  SC  SC  SC  BK  SC  SC  SC
Cloud Cover (%)  95  95  95 100  90  70  55  60  65  50  45  40  45  55  45  40  35
Temperature      40  40  36  35  33  33  35  35  34  34  35  34  33  32  34  37  35
Min/Max Temp                     33              37              32              37
Wind Dir         SW  SW   W   W   W   W   W   W   W   N   N   N  NE  NE  NW   W   W
Wind (mph)        6   8   9   9  10  11   9   9   8   6   6   9   9   9   8   6   8
Wind Gust (mph)                                                                    
Precip Prob (%)  10  20  40  80  90  70  60  40  40  10  10   5   5   5   5   5   5
Precip Type       S   S   S   S   S   S   S   S                                    
12 Hour QPF                    0.17            0.17            0.01            0.00
12 Hour Snow                    0.7             1.0             0.1             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.2 9.1 7.9 7.8 7.8 7.6 8.5 8.5 8.6 8.6 8.3 8.0 7.7 7.4 7.7 7.9 8.0


**************************Western Uintas***************************

...Christmas Meadows ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  OV  OV  OV  OV  BK  BK  BK  BK  SC  SC  SC
Cloud Cover (%)  95  95  95  95  95  90  85  80  95  80  65  60  65  60  45  40  40
Temperature      43  35  32  33  32  33  37  37  32  31  28  26  24  26  41  45  38
Min/Max Temp                     31              42              23              45
Wind Dir          W  SW  SW  SW  SW   W   W   W   W   W  SW   W   W  SW  NW  NW   W
Wind (mph)        6   6   6   5   2  10  10  11   9   4   3   4   6   6   6   6   6
Wind Gust (mph)                                                                    
Precip Prob (%)  10  20  20  50  80  80  60  50  40  20  20  10  10  10  10   5   5
Precip Type       R   S   S   S   S   S   S   S   S   S                            
12 Hour QPF                    0.06            0.08            0.05            0.00
12 Hour Snow                    0.1             0.2             0.2             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.5 9.2 9.1 9.1 9.0 8.9 9.1 9.1 8.9 8.6 8.2 7.8 7.5 7.1 7.8 8.4 8.5


...Mirror Lake ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  OV  OV  OV  BK  BK  SC  BK  BK  BK  SC  SC
Cloud Cover (%)  90  90  95  95  95  90  85  85  90  65  60  50  65  65  50  45  45
Temperature      33  31  31  30  31  31  29  31  27  27  27  25  24  23  32  33  27
Min/Max Temp                     29              31              22              34
Wind Dir         SW  SW  SW  SW   W  NW  NW  NW  NW  NW  NW   N  NW  NW  NW   W   W
Wind (mph)       10   8   9   9   8  13  13  12  13  10   9   9   9   8   9   6   6
Wind Gust (mph)                                                                    
Precip Prob (%)  10  20  20  60  80  80  60  50  50  20  20  10  10  10  10  10  10
Precip Type       S   S   S   S   S   S   S   S   S   S                            
12 Hour QPF                    0.14            0.20            0.03            0.00
12 Hour Snow                    1.5             1.8             0.3             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.6 9.3 9.3 9.2 9.2 9.1 9.2 9.2 9.0 8.4 8.0 7.6 7.5 7.1 7.9 8.6 8.6


...Samak ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  OV  OV  OV  BK  SC  SC  BK  BK  SC  SC  SC
Cloud Cover (%)  85  95  95  95 100  85  80  75  85  70  50  50  60  65  50  35  40
Temperature      45  38  35  34  34  34  39  41  38  32  30  28  26  29  40  44  40
Min/Max Temp                     33              41              26              44
Wind Dir          W  SE  SE   S  NW   W  NW  NW  NW  NW   N   N   N   N  NW  NW   W
Wind (mph)        4   4   4   4   3   6   9   9   9   4   4   4   5   5   5   4   4
Wind Gust (mph)                                                                    
Precip Prob (%)   5  10  20  70  80  70  50  40  40  10  10   5   5   5   5   5   5
Precip Type           S   S   S   S   S   S   S                                    
12 Hour QPF                    0.12            0.11            0.01            0.00
12 Hour Snow                    0.5             0.3             0.0             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.5 9.3 8.3 8.2 8.3 8.2 9.1 9.1 8.9 8.4 8.1 7.7 7.6 7.2 7.9 8.5 8.5


...Wolf Creek Pass ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  OV  OV  OV  BK  BK  SC  BK  BK  BK  SC  SC
Cloud Cover (%)  90  95  95  95  95  85  80  75  75  70  55  45  60  65  55  35  35
Temperature      34  34  33  33  33  33  35  35  33  30  29  28  25  28  36  40  35
Min/Max Temp                     32              38              25              40
Wind Dir          W  SW  SW  SW  NW  NW  NW  NW  NW  NW  NW  NW  NW  NW   W   W   W
Wind (mph)        6   6   6   6   6  13  13  13  12  10   8   9  10   9   8   8   6
Wind Gust (mph)                                                                    
Precip Prob (%)   5  10  20  70  70  70  50  40  40  10  10   5   5   5   5   5   5
Precip Type           S   S   S   S   S   S   S                                    
12 Hour QPF                    0.09            0.14            0.02            0.00
12 Hour Snow                    0.8             1.0             0.1             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.5 9.4 8.9 8.9 8.8 8.8 9.2 9.2 9.0 8.6 8.1 7.6 7.7 7.2 8.0 8.6 8.6


...Thousand Peaks Ranch ...

Date                             Tuesday 11/02                   Wednesday 11/03
Time (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6p  9p  12  3a  6a  9a  12  3p  6p  9p  12  3a  6a  9a  12  3p  6p  

Cloud Cover      OV  OV  OV  OV  OV  OV  OV  OV  OV  OV  BK  BK  BK  BK  BK  SC  SC
Cloud Cover (%)  85  95  95  95 100  90  90  90  95  75  55  50  60  65  50  40  40
Temperature      41  38  37  35  34  34  37  39  36  33  30  29  28  28  38  41  36
Min/Max Temp                     33              39              26              41
Wind Dir         SW   S   S  SW   W   W   W   W  NW   W  NW   N  NW   S  NW  NW   W
Wind (mph)        8   6   6   6   5  10  11  11   9   5   4   4   5   5   8   6   6
Wind Gust (mph)                                                                    
Precip Prob (%)  10  20  20  60  90  80  60  50  50  20  20  10  10  10  10   5   5
Precip Type       S   S   S   S   S   S   S   S   S   S                            
12 Hour QPF                    0.16            0.17            0.03            0.00
12 Hour Snow                    0.8             0.7             0.1             0.0
12 Hour Ice                    0.00            0.00            0.00            0.00
Snow Level (kft)9.5 9.2 8.7 8.7 8.6 8.6 9.1 9.2 8.9 8.5 8.2 7.7 7.5 7.1 7.8 8.4 8.5

$$

--- Precip Type Codes ---

CODE   TYPE
 T     Thunderstorms
 R     Rain
 S     Snow
 I     Sleet
 Z     Freezing Rain
`;