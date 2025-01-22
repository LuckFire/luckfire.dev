import { IconComponent } from "#/components/extensions/IconComponent";

export const Discord = (props: { scale?: number }) => {
    const paths = [
       "M55.1056 4.22191C55.0865 4.18584 55.0551 4.15805 55.0171 4.14378C50.8059 2.19275 46.3621 0.800989 41.7965 0.00329149C41.7555 -0.00429847 41.7132 0.00131453 41.6755 0.0193378C41.6378 0.0373611 41.6067 0.0668838 41.5865 0.103735C40.9809 1.2134 40.4312 2.35321 39.9394 3.5188C35.0154 2.76422 30.0068 2.76422 25.0828 3.5188C24.5891 2.35032 24.0318 1.21024 23.4137 0.103735C23.3923 0.0679819 23.361 0.0393796 23.3237 0.021512C23.2863 0.00364449 23.2446 -0.00269376 23.2037 0.00329149C18.6301 0.797395 14.1785 2.18926 9.96093 4.14378C9.92394 4.15961 9.89295 4.18699 9.8725 4.22191C1.44933 16.9336 -0.860958 29.3215 0.266552 41.5645C0.269745 41.5953 0.279257 41.6251 0.294481 41.652C0.309706 41.6789 0.330311 41.7023 0.354985 41.7207C5.26147 45.3848 10.7486 48.1811 16.5823 49.9905C16.6242 50.0036 16.6692 50.0031 16.7108 49.9891C16.7524 49.9751 16.7887 49.9483 16.8144 49.9124C18.0661 48.192 19.1753 46.3704 20.1306 44.4661C20.1434 44.4399 20.1506 44.4114 20.1519 44.3822C20.1531 44.3531 20.1484 44.324 20.1381 44.2967C20.1277 44.2695 20.1119 44.2447 20.0916 44.2239C20.0713 44.2031 20.0469 44.1868 20.0201 44.176C18.2675 43.4979 16.5709 42.6807 14.9463 41.7319C14.9176 41.7141 14.8935 41.6897 14.8761 41.6606C14.8587 41.6315 14.8485 41.5986 14.8464 41.5647C14.8442 41.5308 14.8501 41.4968 14.8637 41.4657C14.8772 41.4346 14.898 41.4072 14.9242 41.3859C15.2669 41.1292 15.6095 40.8614 15.9301 40.5935C15.9584 40.5684 15.9931 40.552 16.0303 40.5461C16.0675 40.5401 16.1056 40.545 16.1401 40.56C26.7741 45.4594 38.2924 45.4594 48.8048 40.56C48.8383 40.5435 48.8758 40.5368 48.913 40.5407C48.9501 40.5447 48.9854 40.5591 49.0148 40.5823C49.3354 40.8502 49.678 41.1292 50.0207 41.3859C50.0469 41.4072 50.0677 41.4346 50.0812 41.4657C50.0948 41.4968 50.1007 41.5308 50.0985 41.5647C50.0964 41.5986 50.0862 41.6315 50.0688 41.6606C50.0514 41.6897 50.0273 41.7141 49.9986 41.7319C48.3782 42.6856 46.6809 43.4995 44.9248 44.1648C44.898 44.1757 44.8736 44.192 44.8533 44.2128C44.833 44.2335 44.8172 44.2583 44.8068 44.2856C44.7965 44.3128 44.7918 44.3419 44.793 44.3711C44.7943 44.4002 44.8015 44.4288 44.8143 44.455C45.7863 46.3498 46.8947 48.1701 48.1305 49.9012C48.1562 49.9371 48.1925 49.964 48.2341 49.978C48.2757 49.992 48.3207 49.9925 48.3626 49.9794C54.2132 48.1781 59.7161 45.3813 64.6341 41.7095C64.6593 41.6916 64.6803 41.6684 64.6956 41.6414C64.7109 41.6144 64.7201 41.5843 64.7226 41.5533C66.0712 27.4131 62.4454 15.1256 55.1056 4.22191ZM21.7224 34.1093C18.5167 34.1093 15.8859 31.1407 15.8859 27.5024C15.8859 23.8641 18.4725 20.8843 21.7224 20.8843C25.0055 20.8843 27.6142 23.8753 27.5589 27.4912C27.5589 31.1407 24.9723 34.1093 21.7224 34.1093ZM43.322 34.1093C40.1163 34.1093 37.4854 31.1407 37.4854 27.5024C37.4854 23.8641 40.061 20.8843 43.322 20.8843C46.605 20.8843 49.2138 23.8753 49.1585 27.4912C49.1585 31.1407 46.594 34.1093 43.322 34.1093Z" 
    ];

    return <IconComponent paths={paths} scale={props.scale} size={[65, 50]} viewbox="0 0 65 50"></IconComponent>
};

export const GitHub = (props: { scale?: number }) => {
    const paths = [
        "M16.7238 40.2599C16.7238 40.4667 16.4919 40.6321 16.1996 40.6321C15.8669 40.6631 15.6351 40.4977 15.6351 40.2599C15.6351 40.0531 15.8669 39.8877 16.1593 39.8877C16.4617 39.8567 16.7238 40.0221 16.7238 40.2599ZM13.5887 39.7947C13.5181 40.0014 13.7198 40.2392 14.0222 40.3013C14.2843 40.4047 14.5867 40.3013 14.6472 40.0945C14.7077 39.8877 14.5161 39.6499 14.2137 39.5569C13.9516 39.4845 13.6593 39.5879 13.5887 39.7947ZM18.0444 39.6189C17.752 39.6913 17.5504 39.8877 17.5806 40.1255C17.6109 40.3323 17.873 40.4667 18.1754 40.3943C18.4677 40.322 18.6694 40.1255 18.6391 39.9187C18.6089 39.7223 18.3367 39.5879 18.0444 39.6189ZM24.6774 0C10.6956 0 0 10.8869 0 25.2271C0 36.693 7.03629 46.5047 17.0867 49.9579C18.377 50.1957 18.8306 49.3789 18.8306 48.7069C18.8306 48.0658 18.8004 44.5299 18.8004 42.3587C18.8004 42.3587 11.744 43.9096 10.2621 39.2777C10.2621 39.2777 9.1129 36.2691 7.45968 35.4937C7.45968 35.4937 5.15121 33.8704 7.62097 33.9015C7.62097 33.9015 10.131 34.1082 11.5121 36.5689C13.7198 40.5598 17.4194 39.4121 18.8609 38.7298C19.0927 37.0755 19.748 35.9279 20.4738 35.2455C14.8387 34.6045 9.15323 33.7671 9.15323 23.821C9.15323 20.9778 9.91936 19.551 11.5323 17.7313C11.2702 17.0593 10.4133 14.2884 11.7944 10.7112C13.9012 10.0391 18.75 13.5027 18.75 13.5027C20.7661 12.9237 22.9335 12.6239 25.0806 12.6239C27.2278 12.6239 29.3952 12.9237 31.4113 13.5027C31.4113 13.5027 36.2601 10.0288 38.3669 10.7112C39.748 14.2988 38.8911 17.0593 38.629 17.7313C40.2419 19.5613 41.2298 20.9881 41.2298 23.821C41.2298 33.7981 35.2923 34.5942 29.6573 35.2455C30.5847 36.0623 31.371 37.6131 31.371 40.0428C31.371 43.527 31.3407 47.8384 31.3407 48.6862C31.3407 49.3582 31.8044 50.175 33.0847 49.9372C43.1653 46.5047 50 36.693 50 25.2271C50 10.8869 38.6593 0 24.6774 0ZM9.79839 35.6591C9.66734 35.7625 9.69758 36.0003 9.86895 36.1967C10.0302 36.3621 10.2621 36.4345 10.3931 36.3001C10.5242 36.1967 10.494 35.9589 10.3226 35.7625C10.1613 35.597 9.92943 35.5247 9.79839 35.6591ZM8.70968 34.8216C8.63911 34.956 8.73992 35.1215 8.94153 35.2248C9.10282 35.3282 9.30444 35.2972 9.375 35.1525C9.44556 35.0181 9.34476 34.8526 9.14314 34.7493C8.94153 34.6872 8.78024 34.7182 8.70968 34.8216ZM11.9758 38.5023C11.8145 38.6367 11.875 38.9469 12.1069 39.1433C12.3387 39.3811 12.631 39.4121 12.7621 39.2467C12.8931 39.1123 12.8327 38.8021 12.631 38.6057C12.4093 38.3679 12.1069 38.3369 11.9758 38.5023ZM10.8266 36.9825C10.6653 37.0859 10.6653 37.3547 10.8266 37.5925C10.9879 37.8303 11.2601 37.9337 11.3911 37.8303C11.5524 37.6959 11.5524 37.427 11.3911 37.1893C11.25 36.9515 10.9879 36.8481 10.8266 36.9825Z"
    ];

    return <IconComponent paths={paths} scale={props.scale} size={[50, 50]} viewbox="0 0 50 50"></IconComponent>
};

export const XTwitter = (props: { scale?: number }) => {
    const paths = [
        "M40.0731 2H47.8798L30.8288 21.4837L50.8875 48H35.1856L22.8784 31.9221L8.81298 48H0.995192L19.2293 27.1562L0 2H16.1L27.213 16.6957L40.0731 2ZM37.3308 43.3337H41.6543L13.7447 6.42308H9.10048L37.3308 43.3337Z"
    ];

    return <IconComponent paths={paths} scale={props.scale} size={[50, 50]} viewbox="0 0 50 50"></IconComponent>
};

export const Roblox = (props: { scale?: number }) => {
    const paths = [
        "M39.4068 50L0 39.4068L10.5085 0L50 10.678L39.4068 50ZM20.9322 17.9661L31.9492 21.0169L28.9831 32.0339L17.9661 28.9831L20.9322 17.9661Z"
    ];

    return <IconComponent paths={paths} scale={props.scale} size={[50, 50]} viewbox="0 0 50 50"></IconComponent>
};