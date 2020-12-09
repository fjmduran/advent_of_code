"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AOC_09_2020 = void 0;
const global_1 = require("./global");
class AOC_09_2020 {
    static aBailar() {
        //this.firstPart(25,this.input)
        console.time('Test');
        this.secondPart(127, this.inputTest);
        console.timeEnd('Test');
        console.time('Real input');
        this.secondPart(258585477, this.input);
        console.timeEnd('Real input');
    }
    static secondPart(obj, input) {
        const inputArray = global_1.global.inputToArrayInt(input);
        let result = [];
        const checkSum = (indice) => {
            if (indice >= inputArray.length)
                return;
            let acc = 0;
            for (let i = 0; i < indice; i++) {
                acc = 0;
                result = [];
                for (let j = i; j < indice; j++) {
                    acc = acc + inputArray[j];
                    result.push(inputArray[j]);
                    if (acc === obj) {
                        return;
                    }
                }
            }
            checkSum(indice + 1);
        };
        checkSum(5);
        console.log(Math.min(...result) + Math.max(...result));
    }
    static firstPart(preamble, input) {
        const inputArray = global_1.global.inputToArrayInt(input);
        const checkSum = (indice) => {
            let sumaOK = false;
            if (indice >= inputArray.length)
                return;
            for (let i = indice - preamble; i < indice; i++) {
                for (let j = i; j < indice; j++) {
                    if (inputArray[i] + inputArray[j + 1] === inputArray[indice]) {
                        sumaOK = true;
                        break;
                    }
                }
                if (sumaOK)
                    break;
            }
            if (!sumaOK) {
                console.log('salida=' + inputArray[indice]);
            }
            else {
                checkSum(indice + 1);
            }
        };
        checkSum(preamble);
    }
}
exports.AOC_09_2020 = AOC_09_2020;
AOC_09_2020.inputTest = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;
AOC_09_2020.input = `12
6
33
7
21
32
30
37
26
34
18
3
49
1
11
24
15
16
4
20
5
25
31
10
40
9
13
36
17
6
58
19
32
81
33
12
18
41
7
14
11
21
27
15
16
20
90
35
22
68
23
24
26
38
42
25
29
47
56
19
28
103
31
18
30
32
46
43
66
34
45
37
40
50
41
51
44
48
85
81
49
52
59
53
47
80
55
58
61
120
73
71
96
181
92
77
101
84
88
89
91
103
97
99
189
100
289
141
102
105
113
116
119
150
190
162
193
161
200
165
178
188
381
177
180
191
196
197
199
216
202
281
316
299
218
229
235
417
326
323
343
338
349
355
356
375
357
368
393
379
755
428
401
437
724
420
447
597
746
713
783
558
649
975
666
804
687
704
711
1403
725
736
830
772
780
821
829
1241
857
1268
1487
1224
1283
1517
1207
1294
1245
1873
1484
1370
1412
1391
1966
1436
1461
1497
2653
1629
1650
2297
2102
2290
4587
2151
2431
3090
3357
2452
2730
2539
2615
2636
2761
3702
3780
3463
2827
2897
2933
2958
5213
3279
4102
4742
4253
6237
4690
5385
5557
4883
4991
6599
8776
5154
5175
5397
7211
6360
5724
5760
5785
12145
9136
5891
7060
12415
9256
8985
10668
10268
10776
10440
9874
10037
10145
19014
10329
10551
10572
10899
11121
16296
11484
11509
17375
20880
15928
21228
12951
17328
19022
18241
18859
19911
20019
20936
20182
21358
27437
20696
22020
20901
22383
21471
22630
39142
40330
22993
24460
28879
34179
31810
30279
67767
35569
48898
37100
38770
106909
43079
42829
57172
43326
41597
42716
42372
44464
43854
44101
53339
47453
51872
53272
58639
67379
74133
111911
65848
78648
85698
81486
75870
81142
84676
83969
85201
89825
84313
85088
86226
133679
87955
100725
91554
119251
146027
119120
120651
170899
147334
139981
141718
149817
154518
161071
169441
250896
185401
168282
169057
173043
179509
169401
255987
289708
192279
341325
371788
264597
266454
411967
239771
275169
281699
311159
354458
304335
521470
315589
605297
473776
408053
348566
361680
412814
590758
454678
409172
432050
467448
531051
616494
539766
675626
506225
761241
720331
556868
586034
757738
619924
652901
761380
844864
867492
710246
756619
774494
770852
821986
841222
863850
1514357
1615716
973673
1156260
1045991
1126149
1520393
1063093
1142902
1176792
1698892
1545346
1330170
1394418
1363147
1466865
1481098
1484740
1984124
3030086
1592838
1989999
1663208
2560348
2643657
2303843
2019664
2036766
2109084
2172140
2205995
2239885
2965838
2319694
2769630
2693317
2947963
3256046
2830012
2844245
3701922
3869203
4128748
4093208
6667760
4229884
4056430
4878714
4802401
4145850
6334743
7571125
5016385
4281224
4445880
7008396
5009515
6448442
9246269
5462947
8315083
5674257
6100291
14415374
6546167
7758352
9162235
9083625
8375734
8202280
8337654
8427074
10479332
8591730
8727104
9297609
9290739
13858643
9455395
9908827
16794010
13221299
11563238
12646458
11137204
11774548
12220424
14302571
14304519
14748447
25865809
22680253
16578014
27525818
19206436
16764728
17717813
17318834
17882469
18753004
18588348
18746134
21046031
19364222
21472065
22700442
28352562
22911752
45117290
29492361
23994972
26522995
32067281
43359194
44405464
33342742
34083562
35784450
36128950
34482541
35600282
35201303
45467037
37334482
37952570
39634379
38110356
67602717
40836287
57182983
45612194
73710638
46906724
56062253
59865737
78946643
58590276
65410023
68566103
67426304
91933018
95696632
69683844
70082823
70801585
72934764
72535785
75287052
160499121
76062926
77744735
95293339
124651459
100702024
105497000
101674447
184517196
102968977
137945808
144970896
124000299
126016580
135492846
180713712
145746770
142618608
198951344
142219629
334444190
143337370
170580391
175989076
151349978
153807661
171356265
173038074
195995363
383468540
280165437
526805910
422385066
245188606
226969276
250016879
259493145
261509426
371989418
396538584
284838237
285556999
472157882
258585477
293569607
349803024
294687348
305157639
539875954
322706243
415317087
644977966
400007350
422964639
508602356
563743116
672401945
476986155
544704227
1016862109
543586486
518078622
1103619070
880591774
543423714
590714638
544142476
949144037
552155084
1235692604
1029141239
710004435
627863882
815324437
722713593
822971989
1027871232
876993505
931566995
985588511
1061665108
1020572641
1474990709
1406039075
1062221098
1061502336
1070233706
1096297560
1087566190
1095578798
1134857114
1172006358
1337868317
1367479521
2182803958
1754538984
1964559695
1350577475
1599707098
2162728346
1850843221
1808560500
1862582016
2149787288
2073154701
2082074977
2082793739
2222423304
3259025906
2123723434
4306527392
2165812504
6115087892
2183144988
2472725431
2306863472
2509874675
2705347838
3213159491
4037714396
3408267598
2950284573
3201420696
3450550319
3881715201
3890635477
4085005320
3935736717
4155229678
4155948440
4304498281
4206517173
4289535938
5906768534
4306868422
5616362823
4348957492
4490008460
6994883776
6358552171
4816738147
8225005745
7137157413
6151705269
6400834892
9315036132
7440293033
6651971015
8752474864
7772350678
7826372194
9905898761
10707509663
10113285707
8462816862
8511015454
8496053111
8779544398
9123606569
8655825914
13472564061
17885636385
9306746607
10968443416
12257031180
17133118801
15599974275
14896888003
14904180133
14478343209
15162986469
14092264048
14424321693
17007068565
15598722872
17118642776
23215870617
22871808446
30078317484
16958869973
26265616580
23552713917
25738414371
18430353176
17962572521
22779310668
20275190023
21563777787
25392765109
26349295228
28516585741
28570607257
29382523342
33334533309
28902664902
29255250517
29690986920
44501387774
48610222817
51786477874
34077512749
34921442494
35389223149
36392925697
37234059996
39994130963
77835921083
38237762544
38705543199
39526350308
41838967810
66065165561
46956542896
51742060337
66754348285
57087192998
57473272159
58637773859
106083494976
65080210069
58946237437
78231893507
68998955243
69466735898
70310665643
176394160619
77228190959
71782148846
73626985693
75471822540
76943305743
77764112852
96178815358
91268410645
100785205247
132573223130
120583528589
98698603233
125369046030
167539553532
114560465157
129255421005
117584011296
124026447506
190894194232
128412973335
198347641441
197811719548
161579076288
167960964204
145409134539
147253971386
204727243545
149098808233
152415128283
294507942772
195348124148
187447226003
229198178582
199483808480
213259068390
319374571654
308478205528
232144476453
253281868511
238586912663
281670549288
241610458802
292663105925
467785091245
277511781568
339862354286
296352779619
297824262822
428681987062
299669099669
301513936516
519122240370
391002040946
405696996794
419591702456
424546302730
386931034483
737160192590
412742876870
445403544843
667268899725
470731389116
772245325632
534952417799
480197371465
534273564727
537963238421
577180881237
1001727183967
573864561187
594177042441
599338199338
597493362491
601183036185
686600134152
688444970999
777933075429
796699037740
792628031277
962509541151
1349440575634
960795595670
916134933959
983366783264
1077690733956
1371583524970
1005004953843
1285938333490
1014470936192
1018160609886
1578908065204
1111827799608
1370563598927
2078566364767
1168041603628
1191670404932
1284093496643
1198676398676
1738728671099
1589327069017
1466378046428
1889760875037
2375607102944
2332379120640
3260324473964
1975266531862
2980271485705
1899501717223
2449274258926
2019475890035
2116832753451
2023165563729
2186202213514
2206141341124
3168235134221
2279869403236
2310504198284
2359712008560
3143308135490
2366718002304
3558388407236
3650811498947
2665054445104
3055705115445
3489543610157
3672519387552
4205678103549
3874768249085
3918977607258
3922667280952
3994742421897
5720759560549
4348775976149
4476544762011
5789352141003
7573478779899
4496706411798
4466071616750
4486010744360
4670216206844
9440163639950
5422423117749
4726430010864
6614093522681
6572396105853
6154598055261
12059489524259
9715501982446
6545248725602
7162062997709
13788939616099
14192046744457
8491448833695
7841644888210
7917409702849
9771199093898
8962555506371
8962778028548
8942616378761
9166922618642
9192501627614
11888493008573
8952082361110
15737750353216
10092639324593
10148853128613
12036516640430
10881028066125
12699846780863
15515012484614
13316661052970
16877564980155
16114145358819
20617256483712
15003707885919
15759054591059
16784261266971
18129700647190
17925333534919
25820181358916
17894698739871
17905171885132
17914860389658
18109538997403
18119004979752
18144583988724
19044721685703
36132268968326
20241492453206
20973667390718
30166217287620
36049755873856
26016507833833
29484108047834
29430806411789
28320368938889
30762762476978
31117853244738
31787969152890
33653753330930
33664226476191
34678960006842
35799870625003
47603113027586
35809559129529
36014710882535
67597528282419
36033865369410
73619620861419
38360497432958
57804476986723
48561861392095
61284070532358
50404473802507
46990175224551
69478350677696
66927412374267
62999328945731
74160368057961
57751175350678
62905822397628
61880615721716
81267339503777
65441722483820`;
