import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(request: NextRequest) {
  const fontData = await fetch(
    new URL("../../assets/MontaguSlab_36pt-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontDataNoto = await fetch(
    new URL("../../assets/NotoSans-Black.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontDataNotoMedium = await fetch(
    new URL("../../assets/NotoSans-Medium.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title");
  if (!title) {
    return new ImageResponse(<>Visit with &quot;?title=vercel&quot;</>, {
      width: 1200,
      height: 630,
    });
  }
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          letterSpacing: "-.02em",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#111111",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px",
              borderColor: "#c50384",
              padding: "0.75em",
              borderRadius: "1em",
            }}
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 4267 4267"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,4267.000000) scale(0.100000,-0.100000)"
                fill="#c50384"
                stroke="none"
              >
                <path
                  d="M22365 40733 c-783 -38 -1460 -334 -2033 -887 -535 -517 -836 -1103
                -938 -1826 -26 -182 -26 -671 -1 -860 34 -245 79 -438 151 -645 257 -739 852
                -1408 1573 -1768 202 -102 481 -203 636 -232 l37 -7 0 -1554 0 -1554 -1947 0
                c-2624 0 -3433 15 -4538 81 -2247 134 -3591 451 -4254 1004 -312 260 -521 594
                -600 956 -20 96 -41 268 -41 343 l0 43 143 -48 c615 -208 1472 -336 2662 -399
                326 -18 1159 -24 1365 -11 693 44 1095 187 1270 451 27 41 59 123 74 192 l6
                26 -413 4 c-376 4 -418 6 -478 25 -122 36 -209 106 -250 198 -32 72 -44 181
                -31 276 26 183 115 283 299 336 50 14 150 17 758 23 750 7 747 7 910 62 189
                63 339 185 414 338 58 120 82 219 88 376 17 392 -109 756 -385 1109 -30 39
                -114 129 -186 200 -357 354 -867 642 -1521 860 -625 208 -1267 308 -2140 335
                -963 29 -1804 -74 -2578 -315 -1293 -402 -2407 -1258 -3008 -2309 -388 -681
                -575 -1467 -556 -2341 8 -360 45 -648 123 -958 292 -1163 1092 -2082 2399
                -2753 1630 -838 4029 -1311 7265 -1434 642 -24 1235 -30 3138 -30 l2012 0 0
                -1250 0 -1250 -2627 0 c-2960 0 -3256 -5 -4008 -71 -2388 -206 -3895 -839
                -4621 -1939 -371 -563 -537 -1251 -495 -2050 66 -1233 503 -2057 1459 -2751
                575 -419 1258 -729 2127 -967 940 -258 1965 -461 3055 -607 146 -19 1341 -161
                2655 -315 1315 -154 2405 -282 2423 -285 l32 -6 0 -1304 0 -1304 -2292 -4
                c-2355 -4 -2386 -4 -2708 -41 -324 -38 -534 -68 -730 -107 -1637 -321 -2748
                -1153 -3129 -2343 -112 -349 -162 -689 -162 -1101 0 -327 30 -564 102 -807
                129 -439 327 -768 658 -1098 265 -264 563 -471 974 -676 910 -456 2323 -834
                4207 -1123 271 -42 383 -58 1780 -251 679 -94 1250 -173 1268 -176 l32 -6 0
                -1549 0 -1549 725 0 725 0 0 1451 0 1451 28 -6 c15 -3 356 -51 757 -106 1192
                -164 1668 -250 2390 -431 1312 -330 2512 -836 3455 -1454 131 -86 361 -248
                419 -296 19 -16 36 -27 38 -25 6 5 -16 312 -33 461 -99 891 -379 1608 -863
                2205 -167 206 -441 463 -676 632 -798 574 -2004 990 -3585 1237 -107 17 -568
                82 -1025 146 -456 63 -847 118 -867 121 l-38 6 0 1284 0 1284 328 0 c180 0
                995 -5 1812 -11 1470 -10 1923 -6 2420 21 1792 100 3113 441 3985 1031 707
                478 1161 1148 1349 1989 77 349 101 585 100 1000 0 347 -9 450 -59 710 -163
                836 -669 1537 -1486 2058 -1101 703 -3041 1243 -5732 1597 -284 37 -2690 335
                -2707 335 -7 0 -10 409 -10 1234 l0 1235 2368 4 c1611 3 2429 8 2562 15 732
                44 1153 83 1640 153 2574 370 4195 1343 4803 2884 207 525 300 1134 269 1764
                -33 647 -153 1142 -402 1646 -246 500 -602 924 -1080 1285 -1021 771 -2555
                1216 -4640 1345 -510 31 -849 35 -3172 35 l-2348 0 0 1548 0 1549 93 22 c429
                105 857 324 1202 615 101 85 304 287 394 391 226 263 406 556 530 866 283 709
                293 1595 25 2316 -236 637 -756 1247 -1376 1615 -505 299 -1112 442 -1743 411z
                m-8601 -4053 c189 -48 301 -160 353 -352 13 -45 17 -103 18 -203 0 -119 -4
                -151 -24 -215 -30 -98 -59 -146 -126 -209 -99 -94 -226 -134 -420 -135 -143 0
                -215 14 -311 60 -180 85 -262 261 -251 539 5 141 27 232 74 313 57 96 170 177
                289 206 92 22 304 20 398 -4z m14271 -8650 c1769 -55 2490 -263 2739 -791 45
                -94 65 -171 75 -287 27 -306 -70 -577 -280 -783 -393 -386 -1181 -570 -2659
                -619 -166 -5 -1253 -10 -2482 -10 l-2188 0 0 1250 0 1250 2238 0 c1251 0 2378
                -5 2557 -10z m-6245 -6905 l0 -1146 -32 6 c-18 3 -926 116 -2018 250 -2936
                363 -2919 361 -3440 446 -987 161 -1440 310 -1659 544 -95 102 -141 213 -141
                340 1 287 248 487 725 585 235 49 530 81 895 100 326 16 243 16 3043 18 l2627
                2 0 -1145z m2392 -4855 c513 -60 1055 -123 1203 -140 2019 -229 3075 -450
                3459 -724 193 -138 287 -323 272 -535 -24 -322 -210 -547 -574 -691 -259 -102
                -674 -173 -1232 -210 -340 -22 -959 -30 -2492 -30 l-1578 0 0 1220 c0 671 2
                1220 4 1220 3 0 425 -49 938 -110z m-4652 -5175 c652 -3 1427 -8 1723 -11
                l537 -7 0 -1189 0 -1188 -22 5 c-13 3 -657 93 -1433 201 -1443 200 -1807 255
                -2140 325 -748 157 -1156 325 -1395 576 -97 101 -149 184 -187 298 -24 72 -27
                95 -27 225 0 161 13 227 66 335 105 217 325 352 668 411 155 26 295 32 670 28
                195 -2 888 -6 1540 -9z"
                />
              </g>
            </svg>
            <span
              style={{
                marginLeft: 8,
                fontSize: 20,
                color: "white",
                fontFamily: '"Noto Sans"',
                fontWeight: 600,
              }}
            >
              MEDKAMUS.ID
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "20px 50px",
            fontFamily: '"Montagu Slab"',
            fontWeight: 400,
            fontSize: 75,
            fontStyle: "normal",
            color: "white",
            width: "auto",
            maxWidth: 550,
            textAlign: "center",
            whiteSpace: "pre-wrap",
            lineHeight: 1,
          }}
        >
          {title}
        </div>
        <span
          style={{
            marginLeft: 8,
            fontSize: 20,
            color: "white",
            fontFamily: '"Noto Sans Medium"',
            fontWeight: 200,
            marginTop: "1em",
          }}
        >
          Kunjungi situs untuk melihat arti terminologi!
        </span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Montagu Slab",
          data: fontData,
          style: "normal",
        },
        {
          name: "Noto Sans",
          data: fontDataNoto,
          style: "normal",
        },
        {
          name: "Noto Sans Medium",
          data: fontDataNotoMedium,
          style: "normal",
        },
      ],
    }
  );
}
