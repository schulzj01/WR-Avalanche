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



...BALD MTN (9,145 FT)...

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


...TITUS PEAK (10,079 FT)...

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


...SOLDIER MTN (9,495 FT)...

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


...SAWTOOTH (7775 FT)...

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


...BRUNDAGE RESERVOIR SNOTEL (6250 FT)...

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
