import React from 'react'
import NavBar from "../Components/NavBar";

function IntroScreen() {
    return (
        <div className="App">
            <NavBar/> 
            <div className="footer">
                <svg width="363" height="134" viewBox="0 0 363 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M185.988 8.82812H192.813C192.885 8.82812 192.944 8.77891 192.944 8.71875C192.944 8.17188 192.799 7.67012 192.519 7.24082C192.237 6.81016 191.822 6.46426 191.305 6.2291C190.79 5.99531 190.188 5.875 189.531 5.875H189.269C188.613 5.875 188.01 5.99531 187.495 6.2291C186.978 6.46426 186.563 6.81016 186.281 7.24082C186.001 7.67012 185.856 8.17188 185.856 8.71875C185.856 8.77891 185.915 8.82812 185.988 8.82812Z" fill="#60BD34"/>
                <path d="M196.422 12H193.994V10.6328C195.254 10.6328 196.274 9.78242 196.274 8.73242C196.274 8.67227 196.215 8.62305 196.143 8.62305H195.159C195.086 8.62305 195.027 8.67227 195.027 8.73242C195.027 9.2082 194.565 9.59375 193.994 9.59375H184.806C184.235 9.59375 183.773 9.2082 183.773 8.73242C183.773 8.67227 183.714 8.62305 183.641 8.62305H182.657C182.585 8.62305 182.526 8.67227 182.526 8.73242C182.526 9.78242 183.546 10.6328 184.806 10.6328V12H182.378C182.306 12 182.247 12.0492 182.247 12.1094V12.875C182.247 12.9352 182.306 12.9844 182.378 12.9844H184.806V14.2969C184.806 14.3857 184.81 14.4746 184.818 14.5607C183.692 14.9613 182.903 15.8924 182.903 16.9766C182.903 17.0367 182.962 17.0859 183.034 17.0859H183.953C184.025 17.0859 184.084 17.0367 184.084 16.9766C184.084 16.3723 184.476 15.8432 185.062 15.5588C185.161 15.7939 185.285 16.0182 185.435 16.2287C185.833 16.7961 186.403 17.2705 187.083 17.6027C187.558 17.8338 188.084 17.9965 188.647 18.0744C188.719 18.0744 188.778 18.0252 188.778 17.965V11.6172C188.778 11.557 188.837 11.5078 188.909 11.5078H189.894C189.966 11.5078 190.025 11.557 190.025 11.6172V17.9637C190.025 18.0238 190.084 18.073 190.156 18.073C190.719 17.9951 191.246 17.8324 191.72 17.6014C192.401 17.2691 192.97 16.7947 193.369 16.2273C193.518 16.0154 193.643 15.7912 193.741 15.5574C194.324 15.8432 194.716 16.3723 194.716 16.9766C194.716 17.0367 194.775 17.0859 194.847 17.0859H195.766C195.838 17.0859 195.897 17.0367 195.897 16.9766C195.897 15.8924 195.108 14.9613 193.982 14.5607C193.989 14.4732 193.994 14.3857 193.994 14.2969V12.9844H196.422C196.494 12.9844 196.553 12.9352 196.553 12.875V12.1094C196.553 12.0492 196.494 12 196.422 12Z" fill="#60BD34"/>
                <line x1="117" y1="28.4622" x2="153.717" y2="28.4622" stroke="#4A2849" stroke-width="2"/>
                <line x1="117" y1="32.1814" x2="153.717" y2="32.1814" stroke="#4A2849" stroke-width="2"/>
                <line x1="208.283" y1="28.4624" x2="245" y2="28.4624" stroke="#4A2849" stroke-width="2"/>
                <line x1="208.283" y1="32.1814" x2="245" y2="32.1814" stroke="#4A2849" stroke-width="2"/>
                <line y1="-0.85" x2="10.6708" y2="-0.85" transform="matrix(0.773149 -0.634224 0.937678 0.347505 173.076 27.7676)" stroke="#4A2849" stroke-width="1.7"/>
                <path d="M202 12C202 17.9677 196.518 23 189.5 23C182.482 23 177 17.9677 177 12C177 6.03234 182.482 1 189.5 1C196.518 1 202 6.03234 202 12Z" stroke="#4A2849" stroke-width="2"/>
                <rect x="-1.45422" y="0.243759" width="9.28907" height="5.46563" rx="1.15" transform="matrix(-0.773149 0.634224 -0.937699 -0.347449 173.706 29.489)" stroke="#4A2849" stroke-width="1.7"/>
                <path d="M138.614 40.268C140.541 40.268 142.082 40.4607 143.238 40.846C144.394 41.2087 145.199 41.8433 145.652 42.75C146.105 43.6567 146.219 44.9147 145.992 46.524C145.743 48.1787 145.267 49.4367 144.564 50.298C143.861 51.1367 142.762 51.624 141.266 51.76L141.232 51.93C143 52.0887 144.167 52.7347 144.734 53.868C145.301 54.9787 145.448 56.452 145.176 58.288C144.949 59.8973 144.519 61.1327 143.884 61.994C143.272 62.8553 142.388 63.456 141.232 63.796C140.099 64.1133 138.614 64.272 136.778 64.272C135.305 64.272 134.024 64.2607 132.936 64.238C131.871 64.238 130.885 64.2153 129.978 64.17C129.071 64.1247 128.142 64.068 127.19 64L130.488 40.54C131.327 40.4493 132.143 40.3927 132.936 40.37C133.729 40.3247 134.579 40.302 135.486 40.302C136.393 40.2793 137.435 40.268 138.614 40.268ZM138.444 43.566C137.628 43.566 136.869 43.566 136.166 43.566C135.463 43.5433 134.817 43.5433 134.228 43.566L133.276 50.4H137.492C138.943 50.3773 139.985 50.128 140.62 49.652C141.277 49.176 141.708 48.224 141.912 46.796C142.093 45.4587 141.923 44.586 141.402 44.178C140.903 43.77 139.917 43.566 138.444 43.566ZM137.356 53.29H132.868L131.78 60.974C133.027 60.974 134.455 60.974 136.064 60.974C137.175 60.974 138.059 60.872 138.716 60.668C139.396 60.464 139.906 60.09 140.246 59.546C140.586 59.002 140.824 58.22 140.96 57.2C141.119 56.18 141.107 55.3867 140.926 54.82C140.767 54.2533 140.393 53.868 139.804 53.664C139.237 53.4373 138.421 53.3127 137.356 53.29ZM156.325 47.306L154.693 58.662C154.579 59.5007 154.647 60.09 154.897 60.43C155.169 60.77 155.645 60.94 156.325 60.94C157.209 60.94 158.059 60.6907 158.875 60.192C159.713 59.6933 160.733 58.9113 161.935 57.846L163.397 47.306H167.477L165.165 64H161.969L162.071 60.634C160.733 61.926 159.464 62.8893 158.263 63.524C157.084 64.136 155.871 64.442 154.625 64.442C153.038 64.442 151.893 64.034 151.191 63.218C150.488 62.3793 150.25 61.2233 150.477 59.75L152.211 47.306H156.325ZM180.365 46.898C181.929 46.898 183.505 46.9887 185.091 47.17C186.678 47.3287 188.004 47.5213 189.069 47.748H189.137L186.961 62.912C186.599 65.7907 185.579 67.8647 183.901 69.134C182.247 70.4033 179.991 71.0607 177.135 71.106C176.795 71.106 176.251 71.0947 175.503 71.072C174.778 71.0493 173.996 70.9813 173.157 70.868C172.319 70.7547 171.571 70.5847 170.913 70.358L171.219 67.876C171.877 67.8987 172.568 67.91 173.293 67.91C174.019 67.9327 175.016 67.9327 176.285 67.91C177.895 67.8647 179.289 67.57 180.467 67.026C181.646 66.482 182.428 65.5073 182.813 64.102C183.04 63.3767 183.221 62.674 183.357 61.994C183.516 61.2913 183.788 60.634 184.173 60.022H184.105C183.221 61.2687 182.122 62.2887 180.807 63.082C179.493 63.8753 178.042 64.2833 176.455 64.306C174.483 64.3513 173.123 63.694 172.375 62.334C171.65 60.9513 171.525 58.6393 172.001 55.398C172.296 53.4713 172.681 51.9413 173.157 50.808C173.633 49.6747 174.211 48.8247 174.891 48.258C175.594 47.6913 176.399 47.3287 177.305 47.17C178.212 46.9887 179.232 46.898 180.365 46.898ZM176.183 55.5C175.957 56.996 175.855 58.152 175.877 58.968C175.9 59.7613 176.059 60.3167 176.353 60.634C176.671 60.9287 177.158 61.0647 177.815 61.042C178.767 60.9967 179.719 60.668 180.671 60.056C181.623 59.444 182.598 58.5827 183.595 57.472L184.683 50.026C184.049 50.0033 183.459 49.992 182.915 49.992C182.394 49.9693 181.907 49.958 181.453 49.958C180.184 49.958 179.209 50.094 178.529 50.366C177.872 50.6153 177.373 51.1367 177.033 51.93C176.716 52.7233 176.433 53.9133 176.183 55.5ZM201.205 40.472C202.995 40.472 204.786 40.4947 206.577 40.54C208.367 40.5627 210.022 40.642 211.541 40.778L210.997 43.906H202.531C201.737 43.906 201.159 44.0533 200.797 44.348C200.434 44.6427 200.196 45.1753 200.083 45.946L199.437 50.604H208.787L208.345 53.63L198.995 53.664L197.567 64H193.283L195.935 44.926C196.161 43.498 196.728 42.3987 197.635 41.628C198.564 40.8573 199.754 40.472 201.205 40.472ZM219.629 40.064C220.536 40.064 220.932 40.506 220.819 41.39L220.581 43.26C220.468 44.0307 220.014 44.416 219.221 44.416H217.453C216.569 44.416 216.184 43.974 216.297 43.09L216.535 41.22C216.626 40.4493 217.068 40.064 217.861 40.064H219.629ZM219.867 47.306L217.555 64H213.441L215.787 47.306H219.867ZM228.935 47.306L231.927 53.97H232.505L237.503 47.306H241.787L235.667 55.432L239.781 64H235.769L232.437 56.724H231.995L226.555 64H222.135L228.731 55.398L224.957 47.306H228.935Z" fill="#4A2849"/>
                <path d="M33.18 114.32C31.06 114.32 29.2867 113.607 27.86 112.18C26.4467 110.753 25.74 108.973 25.74 106.84C25.74 104.707 26.4467 102.933 27.86 101.52C29.2733 100.08 31.0467 99.36 33.18 99.36C35.34 99.36 37.0933 100.14 38.44 101.7L37.12 102.98C36.0933 101.74 34.78 101.12 33.18 101.12C31.5933 101.12 30.2667 101.653 29.2 102.72C28.1467 103.773 27.62 105.147 27.62 106.84C27.62 108.533 28.1467 109.907 29.2 110.96C30.2667 112.027 31.5933 112.56 33.18 112.56C34.8467 112.56 36.2933 111.86 37.52 110.46L38.86 111.76C38.18 112.573 37.3467 113.207 36.36 113.66C35.3733 114.1 34.3133 114.32 33.18 114.32ZM40.7397 109.1C40.7397 107.593 41.213 106.347 42.1597 105.36C43.1197 104.373 44.3264 103.88 45.7797 103.88C47.233 103.88 48.433 104.373 49.3797 105.36C50.3397 106.347 50.8197 107.593 50.8197 109.1C50.8197 110.62 50.3397 111.867 49.3797 112.84C48.433 113.827 47.233 114.32 45.7797 114.32C44.3264 114.32 43.1197 113.827 42.1597 112.84C41.213 111.853 40.7397 110.607 40.7397 109.1ZM42.5797 109.1C42.5797 110.153 42.8864 111.007 43.4997 111.66C44.113 112.313 44.873 112.64 45.7797 112.64C46.6864 112.64 47.4464 112.313 48.0597 111.66C48.673 111.007 48.9797 110.153 48.9797 109.1C48.9797 108.06 48.673 107.213 48.0597 106.56C47.433 105.893 46.673 105.56 45.7797 105.56C44.8864 105.56 44.1264 105.893 43.4997 106.56C42.8864 107.213 42.5797 108.06 42.5797 109.1ZM58.1934 112.64C59.0734 112.64 59.8134 112.307 60.4134 111.64C61.0134 110.987 61.3134 110.14 61.3134 109.1C61.3134 108.073 61.0134 107.227 60.4134 106.56C59.8134 105.893 59.0734 105.56 58.1934 105.56C57.3001 105.56 56.5534 105.893 55.9534 106.56C55.3668 107.227 55.0734 108.073 55.0734 109.1C55.0734 110.14 55.3668 110.993 55.9534 111.66C56.5534 112.313 57.3001 112.64 58.1934 112.64ZM58.4934 114.32C57.7734 114.32 57.1134 114.167 56.5134 113.86C55.9268 113.553 55.4734 113.147 55.1534 112.64H55.0734L55.1534 114V118.32H53.3134V104.2H55.0734V105.56H55.1534C55.4734 105.053 55.9268 104.647 56.5134 104.34C57.1134 104.033 57.7734 103.88 58.4934 103.88C59.7868 103.88 60.8801 104.387 61.7734 105.4C62.6934 106.427 63.1534 107.66 63.1534 109.1C63.1534 110.553 62.6934 111.787 61.7734 112.8C60.8801 113.813 59.7868 114.32 58.4934 114.32ZM74.2081 104.2L68.0681 118.32H66.1681L68.4481 113.38L64.4081 104.2H66.4081L69.3281 111.24H69.3681L72.2081 104.2H74.2081ZM78.2491 114H76.4091V104.2H78.1691V105.8H78.2491C78.4357 105.28 78.8157 104.84 79.3891 104.48C79.9757 104.107 80.5491 103.92 81.1091 103.92C81.6424 103.92 82.0957 104 82.4691 104.16L81.9091 105.94C81.6824 105.847 81.3224 105.8 80.8291 105.8C80.1357 105.8 79.5291 106.08 79.0091 106.64C78.5024 107.2 78.2491 107.853 78.2491 108.6V114ZM87.0547 100.82C87.0547 101.18 86.928 101.487 86.6747 101.74C86.4214 101.993 86.1147 102.12 85.7547 102.12C85.3947 102.12 85.088 101.993 84.8347 101.74C84.5814 101.487 84.4547 101.18 84.4547 100.82C84.4547 100.46 84.5814 100.153 84.8347 99.9C85.088 99.6467 85.3947 99.52 85.7547 99.52C86.1147 99.52 86.4214 99.6467 86.6747 99.9C86.928 100.153 87.0547 100.46 87.0547 100.82ZM86.6747 104.2V114H84.8347V104.2H86.6747ZM94.3716 112.64C95.2782 112.64 96.0182 112.313 96.5916 111.66C97.1916 111.007 97.4916 110.153 97.4916 109.1C97.4916 108.073 97.1916 107.227 96.5916 106.56C96.0049 105.893 95.2649 105.56 94.3716 105.56C93.4916 105.56 92.7516 105.893 92.1516 106.56C91.5516 107.227 91.2516 108.073 91.2516 109.1C91.2516 110.14 91.5516 110.987 92.1516 111.64C92.7516 112.307 93.4916 112.64 94.3716 112.64ZM94.3116 118.64C93.7649 118.64 93.2516 118.567 92.7716 118.42C92.2916 118.287 91.8516 118.093 91.4516 117.84C91.0649 117.587 90.7316 117.287 90.4516 116.94C90.1716 116.593 89.9582 116.207 89.8116 115.78L91.5516 115.06C91.7516 115.633 92.0982 116.093 92.5916 116.44C93.0849 116.787 93.6582 116.96 94.3116 116.96C95.3116 116.96 96.0916 116.66 96.6516 116.06C97.2116 115.46 97.4916 114.633 97.4916 113.58V112.64H97.4116C97.0649 113.16 96.5916 113.573 95.9916 113.88C95.4049 114.173 94.7649 114.32 94.0716 114.32C92.7916 114.32 91.6916 113.82 90.7716 112.82C89.8649 111.793 89.4116 110.553 89.4116 109.1C89.4116 107.647 89.8649 106.413 90.7716 105.4C91.6916 104.387 92.7916 103.88 94.0716 103.88C94.7649 103.88 95.4049 104.033 95.9916 104.34C96.5916 104.633 97.0649 105.04 97.4116 105.56H97.4916V104.2H99.2516V113.58C99.2516 115.153 98.8049 116.387 97.9116 117.28C97.0049 118.187 95.8049 118.64 94.3116 118.64ZM102.495 99.68H104.335V104.2L104.255 105.56H104.335C104.615 105.08 105.042 104.68 105.615 104.36C106.202 104.04 106.808 103.88 107.435 103.88C108.635 103.88 109.555 104.227 110.195 104.92C110.848 105.6 111.175 106.573 111.175 107.84V114H109.335V108.2C109.335 106.44 108.555 105.56 106.995 105.56C106.248 105.56 105.615 105.873 105.095 106.5C104.588 107.113 104.335 107.833 104.335 108.66V114H102.495V99.68ZM117.707 114.16C116.907 114.16 116.24 113.913 115.707 113.42C115.187 112.927 114.92 112.24 114.907 111.36V105.88H113.187V104.2H114.907V101.2H116.747V104.2H119.147V105.88H116.747V110.76C116.747 111.413 116.874 111.86 117.127 112.1C117.38 112.327 117.667 112.44 117.987 112.44C118.134 112.44 118.274 112.427 118.407 112.4C118.554 112.36 118.687 112.313 118.807 112.26L119.387 113.9C118.907 114.073 118.347 114.16 117.707 114.16ZM135.692 112.24V114H126.972V112.16L130.512 108.58C131.699 107.367 132.519 106.46 132.972 105.86C133.425 105.247 133.652 104.607 133.652 103.94C133.652 103.34 133.419 102.827 132.952 102.4C132.485 101.973 131.885 101.76 131.152 101.76C130.525 101.76 129.985 101.947 129.532 102.32C129.079 102.693 128.785 103.147 128.652 103.68L126.972 103C127.239 102.16 127.752 101.453 128.512 100.88C129.272 100.293 130.165 100 131.192 100C132.432 100 133.465 100.38 134.292 101.14C135.119 101.9 135.532 102.833 135.532 103.94C135.532 105.26 134.805 106.687 133.352 108.22L129.352 112.24H135.692ZM138.443 107.16C138.443 105.08 138.956 103.367 139.983 102.02C141.009 100.673 142.329 100 143.943 100C145.556 100 146.876 100.68 147.903 102.04C148.929 103.387 149.443 105.093 149.443 107.16C149.443 109.213 148.929 110.927 147.903 112.3C146.876 113.647 145.556 114.32 143.943 114.32C142.329 114.32 141.009 113.647 139.983 112.3C138.956 110.927 138.443 109.213 138.443 107.16ZM147.562 107.16C147.562 105.587 147.229 104.293 146.563 103.28C145.909 102.267 145.036 101.76 143.943 101.76C142.849 101.76 141.976 102.267 141.323 103.28C140.656 104.293 140.323 105.587 140.323 107.16C140.323 108.733 140.656 110.033 141.323 111.06C141.976 112.06 142.849 112.56 143.943 112.56C145.036 112.56 145.909 112.053 146.563 111.04C147.229 110.013 147.562 108.72 147.562 107.16ZM160.641 112.24V114H151.921V112.16L155.461 108.58C156.648 107.367 157.468 106.46 157.921 105.86C158.374 105.247 158.601 104.607 158.601 103.94C158.601 103.34 158.368 102.827 157.901 102.4C157.434 101.973 156.834 101.76 156.101 101.76C155.474 101.76 154.934 101.947 154.481 102.32C154.028 102.693 153.734 103.147 153.601 103.68L151.921 103C152.188 102.16 152.701 101.453 153.461 100.88C154.221 100.293 155.114 100 156.141 100C157.381 100 158.414 100.38 159.241 101.14C160.068 101.9 160.481 102.833 160.481 103.94C160.481 105.26 159.754 106.687 158.301 108.22L154.301 112.24H160.641ZM168.316 100.32V114H166.476V102.6L163.816 103.76L163.116 102.2L167.136 100.32H168.316ZM174.672 112.76C174.672 113.133 174.539 113.453 174.272 113.72C174.019 113.987 173.699 114.12 173.312 114.12C172.939 114.12 172.619 113.987 172.352 113.72C172.086 113.453 171.952 113.133 171.952 112.76C171.952 112.373 172.086 112.053 172.352 111.8C172.619 111.533 172.939 111.4 173.312 111.4C173.699 111.4 174.019 111.533 174.272 111.8C174.539 112.053 174.672 112.373 174.672 112.76ZM188.07 101.94L185.73 108.4H190.49L188.15 101.94H188.07ZM183.71 114H181.67L187.07 99.68H189.15L194.55 114H192.51L191.13 110.12H185.11L183.71 114ZM198.749 99.68V114H196.909V99.68H198.749ZM203.831 99.68V114H201.991V99.68H203.831ZM214.308 114H212.468V104.2H214.228V105.8H214.308C214.494 105.28 214.874 104.84 215.448 104.48C216.034 104.107 216.608 103.92 217.168 103.92C217.701 103.92 218.154 104 218.528 104.16L217.968 105.94C217.741 105.847 217.381 105.8 216.888 105.8C216.194 105.8 215.588 106.08 215.068 106.64C214.561 107.2 214.308 107.853 214.308 108.6V114ZM223.113 100.82C223.113 101.18 222.987 101.487 222.733 101.74C222.48 101.993 222.173 102.12 221.813 102.12C221.453 102.12 221.147 101.993 220.893 101.74C220.64 101.487 220.513 101.18 220.513 100.82C220.513 100.46 220.64 100.153 220.893 99.9C221.147 99.6467 221.453 99.52 221.813 99.52C222.173 99.52 222.48 99.6467 222.733 99.9C222.987 100.153 223.113 100.46 223.113 100.82ZM222.733 104.2V114H220.893V104.2H222.733ZM230.43 112.64C231.337 112.64 232.077 112.313 232.65 111.66C233.25 111.007 233.55 110.153 233.55 109.1C233.55 108.073 233.25 107.227 232.65 106.56C232.063 105.893 231.323 105.56 230.43 105.56C229.55 105.56 228.81 105.893 228.21 106.56C227.61 107.227 227.31 108.073 227.31 109.1C227.31 110.14 227.61 110.987 228.21 111.64C228.81 112.307 229.55 112.64 230.43 112.64ZM230.37 118.64C229.823 118.64 229.31 118.567 228.83 118.42C228.35 118.287 227.91 118.093 227.51 117.84C227.123 117.587 226.79 117.287 226.51 116.94C226.23 116.593 226.017 116.207 225.87 115.78L227.61 115.06C227.81 115.633 228.157 116.093 228.65 116.44C229.143 116.787 229.717 116.96 230.37 116.96C231.37 116.96 232.15 116.66 232.71 116.06C233.27 115.46 233.55 114.633 233.55 113.58V112.64H233.47C233.123 113.16 232.65 113.573 232.05 113.88C231.463 114.173 230.823 114.32 230.13 114.32C228.85 114.32 227.75 113.82 226.83 112.82C225.923 111.793 225.47 110.553 225.47 109.1C225.47 107.647 225.923 106.413 226.83 105.4C227.75 104.387 228.85 103.88 230.13 103.88C230.823 103.88 231.463 104.033 232.05 104.34C232.65 104.633 233.123 105.04 233.47 105.56H233.55V104.2H235.31V113.58C235.31 115.153 234.863 116.387 233.97 117.28C233.063 118.187 231.863 118.64 230.37 118.64ZM238.554 99.68H240.394V104.2L240.314 105.56H240.394C240.674 105.08 241.1 104.68 241.674 104.36C242.26 104.04 242.867 103.88 243.494 103.88C244.694 103.88 245.614 104.227 246.254 104.92C246.907 105.6 247.234 106.573 247.234 107.84V114H245.394V108.2C245.394 106.44 244.614 105.56 243.054 105.56C242.307 105.56 241.674 105.873 241.154 106.5C240.647 107.113 240.394 107.833 240.394 108.66V114H238.554V99.68ZM253.766 114.16C252.966 114.16 252.299 113.913 251.766 113.42C251.246 112.927 250.979 112.24 250.966 111.36V105.88H249.246V104.2H250.966V101.2H252.806V104.2H255.206V105.88H252.806V110.76C252.806 111.413 252.932 111.86 253.186 112.1C253.439 112.327 253.726 112.44 254.046 112.44C254.192 112.44 254.332 112.427 254.466 112.4C254.612 112.36 254.746 112.313 254.866 112.26L255.446 113.9C254.966 114.073 254.406 114.16 253.766 114.16ZM265.651 111.28C265.651 112.133 265.278 112.853 264.531 113.44C263.785 114.027 262.845 114.32 261.711 114.32C260.725 114.32 259.858 114.067 259.111 113.56C258.365 113.04 257.831 112.36 257.511 111.52L259.151 110.82C259.391 111.407 259.738 111.867 260.191 112.2C260.658 112.52 261.165 112.68 261.711 112.68C262.298 112.68 262.785 112.553 263.171 112.3C263.571 112.047 263.771 111.747 263.771 111.4C263.771 110.773 263.291 110.313 262.331 110.02L260.651 109.6C258.745 109.12 257.791 108.2 257.791 106.84C257.791 105.947 258.151 105.233 258.871 104.7C259.605 104.153 260.538 103.88 261.671 103.88C262.538 103.88 263.318 104.087 264.011 104.5C264.718 104.913 265.211 105.467 265.491 106.16L263.851 106.84C263.665 106.427 263.358 106.107 262.931 105.88C262.518 105.64 262.051 105.52 261.531 105.52C261.051 105.52 260.618 105.64 260.231 105.88C259.858 106.12 259.671 106.413 259.671 106.76C259.671 107.32 260.198 107.72 261.251 107.96L262.731 108.34C264.678 108.82 265.651 109.8 265.651 111.28ZM275.487 114H273.647V104.2H275.407V105.8H275.487C275.674 105.28 276.054 104.84 276.627 104.48C277.214 104.107 277.787 103.92 278.347 103.92C278.881 103.92 279.334 104 279.707 104.16L279.147 105.94C278.921 105.847 278.561 105.8 278.067 105.8C277.374 105.8 276.767 106.08 276.247 106.64C275.741 107.2 275.487 107.853 275.487 108.6V114ZM285.708 114.32C284.268 114.32 283.081 113.827 282.148 112.84C281.214 111.853 280.748 110.607 280.748 109.1C280.748 107.607 281.201 106.367 282.108 105.38C283.014 104.38 284.174 103.88 285.588 103.88C287.041 103.88 288.194 104.353 289.048 105.3C289.914 106.233 290.348 107.547 290.348 109.24L290.328 109.44H282.628C282.654 110.4 282.974 111.173 283.588 111.76C284.201 112.347 284.934 112.64 285.788 112.64C286.961 112.64 287.881 112.053 288.548 110.88L290.188 111.68C289.748 112.507 289.134 113.153 288.348 113.62C287.574 114.087 286.694 114.32 285.708 114.32ZM282.768 107.92H288.388C288.334 107.24 288.054 106.68 287.548 106.24C287.054 105.787 286.388 105.56 285.548 105.56C284.854 105.56 284.254 105.773 283.748 106.2C283.254 106.627 282.928 107.2 282.768 107.92ZM300.628 111.28C300.628 112.133 300.254 112.853 299.508 113.44C298.761 114.027 297.821 114.32 296.688 114.32C295.701 114.32 294.834 114.067 294.088 113.56C293.341 113.04 292.808 112.36 292.488 111.52L294.128 110.82C294.368 111.407 294.714 111.867 295.168 112.2C295.634 112.52 296.141 112.68 296.688 112.68C297.274 112.68 297.761 112.553 298.148 112.3C298.548 112.047 298.748 111.747 298.748 111.4C298.748 110.773 298.268 110.313 297.308 110.02L295.628 109.6C293.721 109.12 292.768 108.2 292.768 106.84C292.768 105.947 293.128 105.233 293.848 104.7C294.581 104.153 295.514 103.88 296.648 103.88C297.514 103.88 298.294 104.087 298.988 104.5C299.694 104.913 300.188 105.467 300.468 106.16L298.828 106.84C298.641 106.427 298.334 106.107 297.908 105.88C297.494 105.64 297.028 105.52 296.508 105.52C296.028 105.52 295.594 105.64 295.208 105.88C294.834 106.12 294.648 106.413 294.648 106.76C294.648 107.32 295.174 107.72 296.228 107.96L297.708 108.34C299.654 108.82 300.628 109.8 300.628 111.28ZM307.727 114.32C306.287 114.32 305.1 113.827 304.167 112.84C303.234 111.853 302.767 110.607 302.767 109.1C302.767 107.607 303.22 106.367 304.127 105.38C305.034 104.38 306.194 103.88 307.607 103.88C309.06 103.88 310.214 104.353 311.067 105.3C311.934 106.233 312.367 107.547 312.367 109.24L312.347 109.44H304.647C304.674 110.4 304.994 111.173 305.607 111.76C306.22 112.347 306.954 112.64 307.807 112.64C308.98 112.64 309.9 112.053 310.567 110.88L312.207 111.68C311.767 112.507 311.154 113.153 310.367 113.62C309.594 114.087 308.714 114.32 307.727 114.32ZM304.787 107.92H310.407C310.354 107.24 310.074 106.68 309.567 106.24C309.074 105.787 308.407 105.56 307.567 105.56C306.874 105.56 306.274 105.773 305.767 106.2C305.274 106.627 304.947 107.2 304.787 107.92ZM316.89 114H315.05V104.2H316.81V105.8H316.89C317.076 105.28 317.456 104.84 318.03 104.48C318.616 104.107 319.19 103.92 319.75 103.92C320.283 103.92 320.736 104 321.11 104.16L320.55 105.94C320.323 105.847 319.963 105.8 319.47 105.8C318.776 105.8 318.17 106.08 317.65 106.64C317.143 107.2 316.89 107.853 316.89 108.6V114ZM328.271 114H326.431L322.471 104.2H324.471L327.351 111.8H327.391L330.311 104.2H332.271L328.271 114ZM338.579 114.32C337.139 114.32 335.952 113.827 335.019 112.84C334.085 111.853 333.619 110.607 333.619 109.1C333.619 107.607 334.072 106.367 334.979 105.38C335.885 104.38 337.045 103.88 338.459 103.88C339.912 103.88 341.065 104.353 341.919 105.3C342.785 106.233 343.219 107.547 343.219 109.24L343.199 109.44H335.499C335.525 110.4 335.845 111.173 336.459 111.76C337.072 112.347 337.805 112.64 338.659 112.64C339.832 112.64 340.752 112.053 341.419 110.88L343.059 111.68C342.619 112.507 342.005 113.153 341.219 113.62C340.445 114.087 339.565 114.32 338.579 114.32ZM335.639 107.92H341.259C341.205 107.24 340.925 106.68 340.419 106.24C339.925 105.787 339.259 105.56 338.419 105.56C337.725 105.56 337.125 105.773 336.619 106.2C336.125 106.627 335.799 107.2 335.639 107.92ZM350.399 112.64C351.306 112.64 352.046 112.313 352.619 111.66C353.219 111.007 353.519 110.153 353.519 109.1C353.519 108.073 353.219 107.227 352.619 106.56C352.032 105.893 351.292 105.56 350.399 105.56C349.519 105.56 348.779 105.893 348.179 106.56C347.579 107.227 347.279 108.073 347.279 109.1C347.279 110.14 347.579 110.987 348.179 111.64C348.779 112.307 349.519 112.64 350.399 112.64ZM350.099 114.32C348.819 114.32 347.719 113.813 346.799 112.8C345.892 111.773 345.439 110.54 345.439 109.1C345.439 107.66 345.892 106.427 346.799 105.4C347.719 104.387 348.819 103.88 350.099 103.88C350.819 103.88 351.472 104.033 352.059 104.34C352.659 104.647 353.119 105.053 353.439 105.56H353.519L353.439 104.2V99.68H355.279V114H353.519V112.64H353.439C353.119 113.147 352.659 113.553 352.059 113.86C351.472 114.167 350.819 114.32 350.099 114.32ZM361.082 112.76C361.082 113.133 360.949 113.453 360.682 113.72C360.429 113.987 360.109 114.12 359.722 114.12C359.349 114.12 359.029 113.987 358.762 113.72C358.496 113.453 358.362 113.133 358.362 112.76C358.362 112.373 358.496 112.053 358.762 111.8C359.029 111.533 359.349 111.4 359.722 111.4C360.109 111.4 360.429 111.533 360.682 111.8C360.949 112.053 361.082 112.373 361.082 112.76Z" fill="black"/>
                <path d="M17.856 106.928C17.856 109.208 17.04 111.164 15.408 112.796C13.8 114.404 11.856 115.208 9.576 115.208C7.272 115.208 5.316 114.404 3.708 112.796C2.1 111.188 1.296 109.232 1.296 106.928C1.296 104.648 2.1 102.704 3.708 101.096C5.34 99.464 7.296 98.648 9.576 98.648C11.832 98.648 13.776 99.464 15.408 101.096C17.04 102.728 17.856 104.672 17.856 106.928ZM3.024 106.928C3.024 108.704 3.672 110.24 4.968 111.536C6.264 112.832 7.8 113.48 9.576 113.48C11.376 113.48 12.912 112.844 14.184 111.572C15.48 110.276 16.128 108.728 16.128 106.928C16.128 105.104 15.492 103.556 14.22 102.284C12.948 101.012 11.4 100.376 9.576 100.376C7.776 100.376 6.228 101.024 4.932 102.32C3.66 103.592 3.024 105.128 3.024 106.928ZM9.72 111.212C8.496 111.212 7.476 110.804 6.66 109.988C5.844 109.172 5.436 108.152 5.436 106.928C5.436 105.728 5.844 104.72 6.66 103.904C7.5 103.064 8.52 102.644 9.72 102.644C10.872 102.644 11.916 103.112 12.852 104.048L11.7 105.092C11.148 104.516 10.488 104.228 9.72 104.228C9 104.228 8.376 104.492 7.848 105.02C7.344 105.548 7.092 106.184 7.092 106.928C7.092 107.288 7.164 107.636 7.308 107.972C7.452 108.308 7.644 108.596 7.884 108.836C8.124 109.076 8.4 109.268 8.712 109.412C9.024 109.556 9.36 109.628 9.72 109.628C10.632 109.628 11.352 109.256 11.88 108.512L13.104 109.484C12.24 110.636 11.112 111.212 9.72 111.212Z" fill="black"/>
                </svg>
            </div>
        </div>
    )
}

export default IntroScreen