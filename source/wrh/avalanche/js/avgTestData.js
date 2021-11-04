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

avg.slc = `FWUS45 KSLC 022150
AVGSLC

AVALANCHE WEATHER GUIDANCE
NATIONAL WEATHER SERVICE SALT LAKE CITY UT
324 PM MDT TUE NOV 2 2021

.DISCUSSION...
This is a test discussion from NWS SLC regarding avalanche content.
This discussion will be at the top of all of our AVG products.  You're currently
viewing the one in the avgTestData.js testing data.

**********************NORTHERN WASATCH FRONT***********************

...NORDIC VALLEY (6991 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      SC  SC  FW  SC  SC  SC  SC  FW  SC  SC  FW  FW  FW  SC  SC  SC  SC
CLOUD COVER (%)  40  25  15  30  50  45  25  20  35  40  25  15  20  30  35  45  50
TEMPERATURE      49  43  40  37  35  35  46  54  50  44  40  36  34  35  51  59  55
MIN/MAX TEMP                     34              54              33              59
WIND DIR         NW  NW   N   E   E   E   S   W   W   E   E  SE  SE  SE   S  SW  SW
WIND (MPH)        5   4   4   3   3   3   4   5   4   3   4   4   5   6   6   9   6
WIND GUST (MPH)
PRECIP PROB (%)  30  20   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5
PRECIP TYPE       R                                                               R
12 HOUR QPF                    0.01            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.5 8.3 8.2 7.9 7.7 7.6 7.9 8.4 8.4 8.3 8.3 8.3 8.5 8.8 9.0 9.1 9.5


...POWDER MOUNTAIN (8488 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      BK  SC  FW  SC  SC  SC  SC  SC  SC  SC  SC  FW  FW  SC  SC  SC  SC
CLOUD COVER (%)  55  40  20  35  50  45  30  25  35  40  30  20  15  30  40  45  45
TEMPERATURE      33  33  33  32  32  33  38  40  34  34  36  36  35  34  43  45  39
MIN/MAX TEMP                     32              41              33              46
WIND DIR         NW   N  NE   N   N  NW   W  NW   W  SE  SE  SE  SE  SE  SW  SW   W
WIND (MPH)        9   8   8   6   6   6   6   6   5   8   9  10  10  11  12  13  11
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5
PRECIP TYPE       S                                                               R
12 HOUR QPF                    0.01            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.5 8.3 8.2 7.9 7.7 7.6 8.1 8.6 8.5 8.5 8.4 8.2 8.4 8.6 9.1 9.2 9.4


...SNOWBASIN (8599 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      SC  FW  FW  SC  BK  BK  SC  SC  SC  SC  SC  FW  FW  SC  SC  SC  BK
CLOUD COVER (%)  40  25  20  35  55  50  35  30  40  40  25  20  25  35  40  45  50
TEMPERATURE      31  30  30  29  30  29  34  38  31  33  33  31  30  29  38  42  36
MIN/MAX TEMP                     28              38              29              43
WIND DIR         NW  SE   E  NE   E   E   W  NW   W   E  SE  SE  SE  SE   S  SW   W
WIND (MPH)        9   8   8   8   8   9   9   8   6   9  10  12  12  13  14  13  12
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5
PRECIP TYPE       S                                                               R
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.4 8.3 8.2 7.9 7.7 7.6 7.9 8.3 8.2 8.2 8.3 8.2 8.5 8.8 9.0 9.2 9.5


...FARMINGTON FLATS (7398 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      SC  SC  FW  SC  BK  SC  SC  SC  SC  SC  FW  FW  FW  SC  SC  SC  SC
CLOUD COVER (%)  40  30  25  35  55  50  25  30  35  35  25  20  20  35  35  45  45
TEMPERATURE      37  36  36  34  35  35  44  46  38  38  38  34  34  35  48  51  42
MIN/MAX TEMP                     33              46              34              52
WIND DIR         NW   N  NW   E   E   E  NE  NW  NW  SE   S  SE  SE  SE   S  SW   W
WIND (MPH)        8   5   5   3   3   4   6   6   5   6   6   8   8  10  11  12  10
WIND GUST (MPH)
PRECIP PROB (%)  30  20   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5
PRECIP TYPE       S                                                               R
12 HOUR QPF                    0.01            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.3 8.3 8.2 8.0 7.8 7.7 8.1 8.5 8.4 8.3 8.3 8.3 8.3 8.7 9.1 9.4 9.5


...MONTE CRISTO (7398 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      BK  SC  SC  SC  SC  SC  SC  SC  SC  SC  SC  FW  FW  SC  SC  SC  SC
CLOUD COVER (%)  65  45  30  30  45  50  30  30  30  40  35  20  15  30  35  50  45
TEMPERATURE      38  36  36  35  35  34  43  47  40  36  37  36  36  36  48  52  44
MIN/MAX TEMP                     33              47              34              52
WIND DIR         NW   N  NE  NE   E   S   W   W   W  SE  SE   S   S   S  SW  SW  SW
WIND (MPH)        8   6   4   4   4   4   6   6   4   5   6   6   6   8  11  11  10
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5
PRECIP TYPE       R                                                               R
12 HOUR QPF                    0.01            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.5 8.3 8.1 7.8 7.5 7.5 8.1 8.8 8.7 8.6 8.3 8.2 8.1 8.3 9.1 9.2 9.3


...SESSIONS MOUNTAINS (8397 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      SC  SC  FW  SC  BK  SC  SC  FW  SC  SC  SC  FW  FW  SC  SC  SC  SC
CLOUD COVER (%)  45  30  20  35  50  50  25  25  30  35  25  15  20  35  35  45  45
TEMPERATURE      38  33  33  34  34  32  43  46  41  36  38  37  38  35  48  51  45
MIN/MAX TEMP                     32              46              34              52
WIND DIR         NW   N   E   N  NE  NE   W  NW  NW  SE  SE  SE  SE  SE   S  SW  SW
WIND (MPH)        8   5   5   4   4   4   8   8   4   5   6   8   8   9  12  14  11
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
PRECIP TYPE       S                                                               S
12 HOUR QPF                    0.01            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.3 8.3 8.2 8.0 7.8 7.8 8.2 8.7 8.6 8.4 8.3 8.2 8.3 8.6 9.1 9.4 9.5


***********************CENTRAL WASATCH FRONT***********************

...ALTA (8900 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      SC  SC  FW  SC  SC  SC  FW  SC  SC  SC  FW  FW  FW  SC  SC  SC  BK
CLOUD COVER (%)  50  35  25  35  45  45  25  25  35  30  25  15  15  30  30  45  50
TEMPERATURE      32  29  29  29  28  29  36  39  35  32  33  33  33  31  42  44  40
MIN/MAX TEMP                     28              39              30              44
WIND DIR         NW  NW  NW  NW  NW  NW  NW  NW  SW  SW   S   S   S   S   S  SW  SW
WIND (MPH)       10   9   9   5   4   5   6   5   5   9  10  10  10  12  13  12  11
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
PRECIP TYPE       S                                                               S
12 HOUR QPF                    0.01            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.4 8.2 8.3 7.9 7.7 7.7 8.4 9.1 8.9 8.6 8.4 8.4 8.2 8.2 9.2 9.4 9.5


...LCC - ALTA/SNOWBIRD (9436 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      SC  SC  FW  SC  SC  SC  FW  SC  SC  SC  FW  FW  FW  SC  SC  SC  BK
CLOUD COVER (%)  50  35  25  35  45  45  25  25  35  30  25  20  20  30  30  45  50
TEMPERATURE      30  28  27  27  27  28  35  38  34  32  33  32  32  30  40  43  37
MIN/MAX TEMP                     27              38              29              43
WIND DIR         NW  NW  NW  NW   N   N  NW  NW   W  SW   S   S   S   S   S  SW  SW
WIND (MPH)       10  10   9   5   5   5   6   5   5   9  10   9   9  11  13  12  11
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
PRECIP TYPE       S                                                               S
12 HOUR QPF                    0.01            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.4 8.2 8.3 7.9 7.7 7.7 8.4 9.2 8.9 8.6 8.4 8.3 8.2 8.2 9.1 9.4 9.5


...LCC - MID CANYON/ELBERTS (9298 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      SC  SC  FW  SC  SC  SC  FW  FW  SC  SC  FW  FW  FW  SC  SC  SC  BK
CLOUD COVER (%)  45  30  25  35  45  45  25  25  35  30  20  15  15  35  30  45  50
TEMPERATURE      37  31  31  31  29  31  40  44  39  33  34  34  33  33  46  49  44
MIN/MAX TEMP                     29              44              32              50
WIND DIR         NW   N   N   W  NE  NW  NW  NW  NE   S   S  SE   S   S   S  SW  SW
WIND (MPH)        9   8   6   4   4   4   6   5   4   8   9   9   9  11  11  12  10
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
PRECIP TYPE       S                                                               S
12 HOUR QPF                    0.01            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.4 8.2 8.3 7.9 7.8 7.7 8.4 9.1 8.8 8.6 8.4 8.3 8.2 8.3 9.1 9.4 9.5


...BCC - BRIGTON/SOLITUDE (8757 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      SC  SC  FW  SC  SC  SC  FW  SC  SC  SC  SC  FW  FW  SC  SC  SC  BK
CLOUD COVER (%)  45  40  25  40  45  45  25  30  35  35  25  15  15  30  30  45  50
TEMPERATURE      29  28  28  28  28  28  36  39  32  32  34  34  34  31  41  45  39
MIN/MAX TEMP                     28              39              31              45
WIND DIR         NW  NW  NW  NW  NW  NW  NW   N   W  SW   S   S   S   S   S  SW  SW
WIND (MPH)       10   9   8   5   4   4   6   5   4   6  10   9   9  11  12  12  10
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
PRECIP TYPE       S                                                               S
12 HOUR QPF                    0.01            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.4 8.2 8.2 7.9 7.7 7.6 8.3 9.1 8.9 8.6 8.4 8.3 8.1 8.1 9.1 9.5 9.5


...BCC - MID CANYON/SPRUCES (7398 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      SC  SC  FW  SC  SC  SC  FW  FW  SC  SC  FW  FW  FW  SC  SC  SC  SC
CLOUD COVER (%)  45  35  25  35  50  45  25  25  30  35  25  15  15  30  35  45  50
TEMPERATURE      37  32  31  33  32  32  43  46  39  34  34  36  37  34  48  51  44
MIN/MAX TEMP                     30              46              32              52
WIND DIR         NW   W  SW   N   E   W  NW  NW   W   S   S   S   S   S   S  SW  SW
WIND (MPH)        6   4   4   3   3   3   4   4   3   5   8   8   8  10  10  11   9
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
PRECIP TYPE       S                                                               S
12 HOUR QPF                    0.01            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.5 8.3 8.3 8.0 7.8 7.7 8.3 9.0 8.8 8.6 8.4 8.3 8.2 8.3 9.2 9.4 9.5


...PARK CITY (6568 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      SC  SC  FW  SC  BK  BK  SC  FW  SC  SC  SC  FW  FW  SC  SC  SC  SC
CLOUD COVER (%)  40  35  25  40  50  55  25  25  30  40  25  15  20  30  35  45  45
TEMPERATURE      46  37  33  31  30  31  46  52  48  39  34  31  29  32  52  59  53
MIN/MAX TEMP                     29              53              29              59
WIND DIR         NW   W   W  SW   S   E  NW  NW  NW  SE  SE  SE  SE  SE   S   S  SW
WIND (MPH)        5   3   3   2   2   2   4   4   3   2   3   4   4   6   9  10   8
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
PRECIP TYPE       R                                                               R
12 HOUR QPF                    0.01            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.4 8.2 8.2 7.8 7.5 7.4 8.1 8.7 8.7 8.6 8.3 8.1 8.0 8.1 9.2 9.5 9.5


...PARK CITY RIDGELINE (9570 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      SC  SC  SC  SC  SC  SC  FW  FW  SC  SC  SC  FW  FW  SC  SC  SC  SC
CLOUD COVER (%)  45  40  25  40  50  50  25  25  30  35  25  15  15  30  30  45  50
TEMPERATURE      33  30  31  31  31  30  37  42  36  33  35  36  36  33  44  47  41
MIN/MAX TEMP                     30              42              32              48
WIND DIR         NW  NW  NW  NW  NW  NW   N   N   W   S   S   S   S   S   S  SW  SW
WIND (MPH)       10   8   6   5   4   4   6   5   4   6   8  10  10  11  12  11  11
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
PRECIP TYPE       S                                                               S
12 HOUR QPF                    0.01            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.4 8.3 8.3 7.9 7.7 7.6 8.3 9.0 8.9 8.6 8.3 8.3 8.1 8.2 9.2 9.5 9.5


**********************SOUTHERN WASATCH FRONT***********************

...ASPEN GROVE (7300 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      SC  FW  FW  SC  SC  SC  FW  FW  SC  SC  FW  FW  FW  SC  SC  SC  SC
CLOUD COVER (%)  35  20  20  25  45  45  25  20  25  25  20  10  20  25  35  40  45
TEMPERATURE      36  31  30  31  30  32  46  48  37  32  31  32  32  35  50  52  41
MIN/MAX TEMP                     29              48              31              54
WIND DIR          W   W   W  NE   N  NE   E   W   W  NE   E  SE  SE  SE   S  SW  SW
WIND (MPH)        8   6   6   5   5   4   5   5   4   6   8   8   9   9  10  11  10
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
PRECIP TYPE       S                                                               R
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.4 8.1 8.2 7.9 7.7 7.6 8.2 8.9 8.8 8.6 8.4 8.2 8.1 8.2 9.1 9.4 9.6


...SOLDIER HOLLOW (5804 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      SC  FW  FW  SC  SC  SC  FW  FW  SC  SC  FW  FW  FW  SC  SC  SC  SC
CLOUD COVER (%)  35  25  20  35  45  45  20  25  25  30  25  10  15  30  30  40  45
TEMPERATURE      48  41  37  35  33  33  42  53  50  43  38  34  33  33  48  59  54
MIN/MAX TEMP                     32              53              32              59
WIND DIR          N   W   N   N  NE   E   E   E   W   E  SE  SE  SE  SE   S   S  SW
WIND (MPH)        5   3   3   2   2   2   3   4   3   2   3   3   3   4   6  10   8
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
PRECIP TYPE       R                                                               R
12 HOUR QPF                    0.01            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.3 8.0 8.0 7.6 7.4 7.2 7.9 8.6 8.8 8.5 8.2 8.0 7.8 8.0 9.0 9.4 9.6


...SUNDANCE (6690 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      SC  FW  FW  SC  SC  SC  FW  FW  FW  SC  FW  FW  FW  SC  SC  SC  SC
CLOUD COVER (%)  30  20  15  30  45  45  25  20  25  25  20  10  15  30  30  40  45
TEMPERATURE      53  45  42  39  38  37  49  56  54  47  42  39  39  38  55  62  59
MIN/MAX TEMP                     36              57              37              62
WIND DIR          W  SE   E  NE  NE  NE  NE   W   W  NE   E   E  SE  SE   S  SW  SW
WIND (MPH)        6   4   4   3   3   3   5   6   5   4   4   5   5   6   8  11   8
WIND GUST (MPH)
PRECIP PROB (%)  30  10   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
PRECIP TYPE                                                                       R
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.4 8.2 8.2 7.9 7.6 7.5 8.0 8.7 8.7 8.6 8.4 8.2 8.1 8.2 9.0 9.4 9.6


...BUNNELS FORK (7904 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      SC  FW  FW  SC  SC  SC  FW  FW  FW  SC  FW  FW  FW  SC  SC  SC  SC
CLOUD COVER (%)  30  20  15  30  40  45  25  20  25  25  15  10  15  25  30  40  45
TEMPERATURE      39  36  36  34  35  36  42  45  40  38  38  39  39  38  48  52  46
MIN/MAX TEMP                     34              46              36              53
WIND DIR          W  SE   E   E   E   E   W  NW   W   E  SE  SE  SE  SE   S  SW  SW
WIND (MPH)        8   5   5   5   5   3   6   6   4   5   6   8   9   8  10  12  10
WIND GUST (MPH)
PRECIP PROB (%)  40  10   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
PRECIP TYPE                                                                       R
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.4 8.2 8.3 8.0 7.7 7.5 8.1 8.6 8.7 8.6 8.4 8.2 8.2 8.2 9.1 9.4 9.6


...PROVO PEAK AREA (10197 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      SC  FW  FW  SC  SC  SC  FW  FW  SC  SC  FW  FW  FW  SC  SC  SC  SC
CLOUD COVER (%)  30  20  20  30  45  45  25  25  25  30  15  15  10  30  30  45  45
TEMPERATURE      34  32  31  31  30  31  36  39  36  34  34  34  33  33  42  46  41
MIN/MAX TEMP                     30              39              32              46
WIND DIR         NW  NW  NW   W   N   N  NW  NW  NW  NE  SE  SE  SE  SE   S  SW  SW
WIND (MPH)       11   6   6   5   5   5   6   6   4   6   9   8   9   9  10  11  11
WIND GUST (MPH)
PRECIP PROB (%)  40  10   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
PRECIP TYPE                                                                       S
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.4 8.2 8.2 8.0 7.7 7.5 8.2 8.7 8.6 8.4 8.3 8.2 8.1 8.2 9.1 9.5 9.6


****************************LOGAN AREA*****************************

...CHERRY PEAK (7451 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      BK  SC  FW  SC  BK  SC  SC  FW  SC  BK  SC  FW  FW  SC  SC  SC  BK
CLOUD COVER (%)  65  40  20  30  55  45  30  20  40  50  35  25  20  30  30  45  55
TEMPERATURE      38  37  36  35  35  35  41  43  39  38  38  38  38  37  45  48  43
MIN/MAX TEMP                     35              44              37              48
WIND DIR          W   N  NE  NE  NE   S   W   W   N  SE  SE  SE  SE  SE  SW  SW  SW
WIND (MPH)        6   5   4   4   4   3   5   5   3   5   6   8   8   6  10  11  10
WIND GUST (MPH)
PRECIP PROB (%)  30  10   0   0   0   0   0   0   0   0   0   0   0   0   0  10  10
PRECIP TYPE                                                                       R
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.3 7.9 7.9 7.7 7.5 7.4 7.8 8.1 8.1 8.0 8.1 7.9 8.0 8.3 9.1 9.0 9.2


...BEAVER MOUNTAIN (6880 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      BK  SC  SC  SC  BK  SC  SC  SC  SC  BK  SC  FW  FW  SC  SC  SC  SC
CLOUD COVER (%)  65  45  30  35  55  45  30  25  35  50  40  25  25  30  30  45  50
TEMPERATURE      40  34  32  31  30  31  43  46  40  34  32  30  29  31  48  51  44
MIN/MAX TEMP                     29              46              29              52
WIND DIR         NW  NW  NW  NW  NW   W  SW   W   W  SW   S   S   S   S  SW  SW   W
WIND (MPH)       10   5   4   2   1   3   8   8   4   2   3   4   4   6  11  13  10
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5
PRECIP TYPE       S                                                               R
12 HOUR QPF                    0.01            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.3 8.0 7.9 7.6 7.3 7.4 8.1 8.7 8.5 8.4 8.2 8.0 8.0 8.1 9.1 9.2 9.1


...TONY GROVE (8799 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      OV  BK  SC  SC  BK  SC  SC  FW  SC  SC  SC  FW  FW  SC  SC  SC  BK
CLOUD COVER (%)  75  50  30  30  50  45  25  25  40  50  35  20  20  30  30  45  55
TEMPERATURE      34  29  27  32  32  32  40  41  35  29  28  34  33  34  44  45  36
MIN/MAX TEMP                     27              41              28              46
WIND DIR         NW  NW  NW  NW  NW  NW   W   W  SW   W   S   S   S   S  SW  SW   W
WIND (MPH)       12   9   6   5   4   5  11  10   5   6   8   9   9   9  14  16  14
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0  10  10
PRECIP TYPE       S                                                               S
12 HOUR QPF                    0.01            0.00            0.00            0.00
12 HOUR SNOW                    0.1             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.3 8.0 7.9 7.6 7.4 7.4 8.0 8.5 8.4 8.2 8.2 8.0 8.0 8.2 9.1 9.1 9.1


...WELLSVILLE MOUNTAINS (8780 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      SC  SC  FW  SC  BK  SC  SC  SC  SC  SC  SC  FW  FW  SC  SC  SC  BK
CLOUD COVER (%)  40  30  20  35  55  45  30  30  40  45  30  20  25  35  40  50  50
TEMPERATURE      35  34  33  33  33  34  38  40  37  37  37  36  36  34  41  44  40
MIN/MAX TEMP                     32              41              34              44
WIND DIR         NW   W  NW   N   N  NW   W   W   W  SE   S  SE  SE  SE  SW  SW  SW
WIND (MPH)        8   6   8   8   8   6   6   6   5   6  10  11  11  12  13  12  11
WIND GUST (MPH)
PRECIP PROB (%)  30  10   0   0   0   0   0   0   0   0   0   0   0   0   0   5   5
PRECIP TYPE                                                                       S
12 HOUR QPF                    0.00            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.3 8.0 8.0 7.8 7.8 7.7 7.8 8.1 8.2 8.1 8.2 8.0 8.4 8.8 9.1 9.2 9.5


**************************WESTERN UINTAS***************************

...CHRISTMAS MEADOWS (8573 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      OV  OV  SC  SC  SC  BK  SC  FW  SC  SC  SC  FW  FW  FW  SC  SC  SC
CLOUD COVER (%)  90  75  40  30  40  50  30  25  35  40  35  15  15  20  25  40  50
TEMPERATURE      38  32  28  25  24  27  42  46  39  29  26  26  27  31  50  53  45
MIN/MAX TEMP                     23              46              26              54
WIND DIR         NW  NW   S   S   S  SW  NW  NW  NW   S   S   S   S   S  SW  SW  SW
WIND (MPH)        6   2   2   2   2   3   4   5   3   2   3   4   4   6   9  11   9
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
PRECIP TYPE       S                                                               S
12 HOUR QPF                    0.02            0.00            0.00            0.00
12 HOUR SNOW                    0.2             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.6 8.3 8.0 7.5 7.3 7.3 8.3 9.0 8.8 8.3 8.0 7.9 7.7 7.9 9.410.0 9.7


...MIRROR LAKE (10525 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      OV  BK  SC  SC  SC  SC  SC  SC  SC  SC  SC  FW  FW  FW  SC  SC  SC
CLOUD COVER (%)  80  60  35  30  45  50  35  25  35  40  35  15  15  25  30  45  50
TEMPERATURE      28  26  24  23  24  27  36  38  30  27  28  28  29  30  40  42  35
MIN/MAX TEMP                     22              38              27              43
WIND DIR         NW   N  NW   N   N  NW  NW  NW   W  SE  SE   S   S   S  SW  SW  SW
WIND (MPH)       10   9   8   5   5   5   8   6   4   5   6   6   6   8  11  11  11
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
PRECIP TYPE       S                                                               S
12 HOUR QPF                    0.02            0.00            0.00            0.00
12 HOUR SNOW                    0.2             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.6 8.2 8.0 7.6 7.3 7.4 8.5 9.5 9.1 8.5 8.1 8.1 7.7 7.9 9.310.0 9.7


...SAMAK (7648 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      BK  SC  FW  SC  SC  SC  SC  FW  SC  SC  SC  FW  FW  FW  SC  SC  SC
CLOUD COVER (%)  60  35  20  25  35  50  30  20  30  35  30  15  10  25  30  40  45
TEMPERATURE      40  31  29  27  26  30  42  46  42  31  30  29  29  34  49  53  48
MIN/MAX TEMP                     26              46              29              53
WIND DIR         NW   W  NE  NE   E   S   W   W  SW   E   E   E  SE  SE   S  SW  SW
WIND (MPH)        6   4   3   2   2   2   4   4   2   3   4   4   4   5   6   8   6
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
PRECIP TYPE       S                                                               R
12 HOUR QPF                    0.01            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.6 8.1 8.0 7.5 7.3 7.4 8.4 9.0 8.8 8.4 8.2 8.0 7.8 7.7 9.2 9.8 9.6


...WOLF CREEK PASS (9797 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      BK  SC  FW  SC  SC  SC  SC  FW  SC  SC  SC  FW  FW  SC  SC  SC  SC
CLOUD COVER (%)  65  45  20  25  35  50  35  25  25  40  30  15  10  25  35  40  45
TEMPERATURE      34  29  28  26  26  30  40  43  36  28  29  29  29  33  45  49  41
MIN/MAX TEMP                     25              43              28              49
WIND DIR         NW  NW  NW  NW  NW  NW  NW  NW  SW  SE  SE  NE  SE  SE   S  SW  SW
WIND (MPH)       10   8   6   5   4   4   6   5   3   5   5   6   6   6   9  10   9
WIND GUST (MPH)
PRECIP PROB (%)  40  20   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
PRECIP TYPE       S                                                               S
12 HOUR QPF                    0.01            0.00            0.00            0.00
12 HOUR SNOW                    0.0             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.6 8.1 8.0 7.6 7.4 7.4 8.4 9.0 8.9 8.4 8.2 8.1 7.8 7.7 9.2 9.8 9.7


...THOUSAND PEAKS RANCH (9600 FT)...

DATE                             WEDNESDAY 11/03                 THURSDAY 11/04
TIME (LT)        18  21  00  03  06  09  12  15  18  21  00  03  06  09  12  15  18
                 6P  9P  12  3A  6A  9A  12  3P  6P  9P  12  3A  6A  9A  12  3P  6P

CLOUD COVER      OV  BK  SC  FW  SC  BK  SC  SC  SC  SC  SC  FW  FW  FW  SC  SC  SC
CLOUD COVER (%)  80  60  30  25  40  50  35  30  30  35  35  15  10  25  30  45  50
TEMPERATURE      36  32  29  27  27  28  40  43  37  31  32  29  30  32  47  49  43
MIN/MAX TEMP                     26              43              29              50
WIND DIR         NW  SW  NE   E   E  SE  NW  NW   W  SE  SE   S   S   S  SW  SW  SW
WIND (MPH)        8   4   4   4   4   3   5   5   4   5   6   6   6   6  11  12  11
WIND GUST (MPH)
PRECIP PROB (%)  50  20   0   0   0   0   0   0   0   0   0   0   0   0   0   0   0
PRECIP TYPE       S                                                               S
12 HOUR QPF                    0.02            0.00            0.00            0.00
12 HOUR SNOW                    0.1             0.0             0.0             0.0
12 HOUR ICE                    0.00            0.00            0.00            0.00
SNOW LEVEL (KFT)8.7 8.3 8.1 7.6 7.3 7.5 8.4 9.1 8.9 8.4 8.1 8.0 7.8 7.8 9.3 9.8 9.6

$$

--- PRECIP TYPE CODES ---

CODE   TYPE
 T     THUNDERSTORMS
 R     RAIN
 S     SNOW
 I     SLEET
 Z     FREEZING RAIN
`;