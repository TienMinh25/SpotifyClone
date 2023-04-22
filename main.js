var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// Code navigation menu app music
var navFooters = $$('.nav-footer-item');
var navMenus = $$('.nav-menu-item');
var navLikes = $$('.nav-like-item');


const infoMusicImg = $('.info-img');
const infoMusicName = $('.name-music');
const infoMusicAuthor = $('.author-music');
const audio = $('.audio-music');
const playBtn = $('.btn-toggle-play');
const lineMusic = $('.line-music');
const nextBtn = $('.tool-music-item--next');
const prevBtn = $('.tool-music-item--prev');
const randomBtn = $('.tool-music-item--random');
const repeatBtn = $('.tool-music-item--repeat');
const playlist = $('.sidebar-2 #tbody-table');


navFooters.forEach(function(navFooter){
    navFooter.onclick = function(){
        if ($('.active')) 
            $('.active').classList.remove('active');
            
        this.classList.add('active');
    }
})

navMenus.forEach(function(navMenu){
    navMenu.onclick = function(){
        if($('.active'))
            $('.active').classList.remove('active');
        this.classList.add('active');
    }
})

navLikes.forEach(function(navLike){
    navLike.onclick = function(){
        if($('.active'))
            $('.active').classList.remove('active');
        this.classList.add('active');
    }
})

// Code render and play music on the browser

function animate(element, heights) {
    let currentHeight = 0;
    let loop = 0;
    setInterval(function(){
        if (currentHeight === heights[loop]){
            loop++;

            if (!heights[loop]) {
                loop = 0;
            }
        } else {
            if (currentHeight > heights[loop]){
                currentHeight--;
            }
            else {
                currentHeight++;
            }

            element.style.height = currentHeight + 'px';
        }
    }, 20);
}


function handleAnimationSoundBar() {
    animate($('.bar1'), [3, 10, 5, 15]);
    animate($('.bar2'), [10, 2, 9, 16]);
    animate($('.bar3'), [4, 15, 8, 15]);
    animate($('.bar4'), [5, 2, 10, 16]);
}

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            id: 1,
            name: 'Sky Decade',
            singer: 'Sơn Tùng M-TP',
            path: './assets/music/song_1.mp3',
            image: './assets/image/anh1.jpeg',
            album: 'Sky Tour'
        },
        {
            id: 2,
            name: 'Nắng Ấm Xa Dần',
            singer: 'Sơn Tùng M-TP',
            path: './assets/music/song_2.mp3',
            image: './assets/image/anh2.jpeg',
            album: 'm-tp M-TP'
        },
        {
            id: 3,
            name: 'Muộn Rồi Mà Sao Còn',
            singer: 'Sơn Tùng M-TP',
            path: './assets/music/song_3.mp3',
            image: './assets/image/anh3.jpeg',
            album: 'Muộn Rồi Mà Sao Còn'
        },
        {
            id: 4,
            name: 'Hãy Trao Cho Anh',
            singer: 'Sơn Tùng M-TP',
            path: './assets/music/song_4.mp3',
            image: './assets/image/anh4.jpeg',
            album: 'Hãy Trao Cho Anh'
        },
        {
            id: 5,
            name: 'Em Của Ngày Hôm Qua',
            singer: 'Sơn Tùng M-TP',
            path: './assets/music/song_5.mp3',
            image: './assets/image/anh5.jpeg',
            album: 'm-tp M-TP'
        },
        {
            id: 6,
            name: 'Âm thầm bên em',
            singer: 'Sơn Tùng M-TP',
            path: './assets/music/song_6.mp3',
            image: './assets/image/anh6.jpeg',
            album: 'Sơn Tùng M-TP'
        },
        {
            id: 7,
            name: 'Thái bình mồ hôi rơi',
            singer: 'Sơn Tùng M-TP',
            path: './assets/music/song_7.mp3',
            image: './assets/image/anh7.jpeg',
            album: 'm-tp M-TP'
        },
        {
            id: 8,
            name: 'Give Me Your Forever',
            singer: 'Zack Tabudlo ft Billkin',
            path: './assets/music/song_8.mp3',
            image: './assets/image/anh8.jpg',
            album: 'Episode'
        },
        {
            id: 9,
            name: 'Stay',
            singer: 'The Kid LAROI, Justin Bieber',
            path: './assets/music/song_9.mp3',
            image: './assets/image/anh9.png',
            album: 'Stay (with Justin Beiber)'
        },
        {
            id: 10,
            name: 'Day Dứt Nỗi Đau',
            singer: 'Mr.Siro',
            path: './assets/music/song_10.mp3',
            image: './assets/image/anh10.jpeg',
            album: 'Day Dứt Nỗi Đau'
        },
        {
            id: 11,
            name: 'Em Đồng Ý (I Do)',
            singer: 'Đức Phúc, 911',
            path: './assets/music/song_11.mp3',
            image: './assets/image/anh11.jpeg',
            album: 'Em Đồng Ý (I Do)'
        },
        {
            id: 12,
            name: 'Để Tôi Ôm Em Bằng Giai Điệu Này',
            singer: 'Kai Đinh, MIN, Grey D',
            path: './assets/music/song_12.mp3',
            image: './assets/image/anh12.jpeg',
            album: 'để tôi ôm em bằng giai điệu này'
        },
        {
            id: 13,
            name: 'Waiting For You',
            singer: 'Mono, Onionn',
            path: './assets/music/song_13.mp3',
            image: './assets/image/anh13.jpeg',
            album: '22'
        },
        {
            id: 14,
            name: 'Falling In Love',
            singer: 'Na Ngọc Anh',
            path: './assets/music/song_14.mp3',
            image: './assets/image/anh14.jpeg',
            album: 'Falling In Love'
        },
        {
            id: 15,
            name: 'Yêu Người Có Ước Mơ',
            singer: 'buitruonglinh',
            path: './assets/music/song_15.mp3',
            image: './assets/image/anh15.jpeg',
            album: 'Bài Hát Hay Nhất - Big Song Big Deal (Tập 6)'
        },
        {
            id: 16,
            name: 'See Tình',
            singer: 'Hoàng Thuỳ Linh',
            path: './assets/music/song_16.mp3',
            image: './assets/image/anh16.jpeg',
            album: 'See Tình'
        },
        {
            id: 17,
            name: 'Khi Người Mình Yêu Khóc',
            singer: 'Phan Mạnh Quỳnh',
            path: './assets/music/song_17.mp3',
            image: './assets/image/anh17.jpeg',
            album: 'Music Home Phan Mạnh Quỳnh ft Bùi Lan Hương'
        },
        {
            id: 18,
            name: 'Tệ Thật, Anh Nhớ Em',
            singer: 'Thanh Hưng',
            path: './assets/music/song_18.mp3',
            image: './assets/image/anh18.jpeg',
            album: 'Tệ Thật, Anh Nhớ Em'
        },
        {
            id: 19,
            name: 'Bo Xì Bo',
            singer: 'Hoàng Thuỳ Linh',
            path: './assets/music/song_19.mp3',
            image: './assets/image/anh19.jpeg',
            album: 'LINK'
        },
        {
            id: 20,
            name: 'Bản Tình Ca Đầu Tiên',
            singer: 'Anh Tú',
            path: './assets/music/song_20.mp3',
            image: './assets/image/anh20.jpeg',
            album: 'Trạm 1 - Xuân Hạ Thu Đông, rồi lại Xuân 2'
        },
        
        
    ],
    render: function(){ 
        var html = this.songs.map(function(song, index){
            return `
                <tr class="row-table" data-index = "${index}">
                    <td style="width: 5%;">
                        <span>${song.id}</span>
                    </td>
                    <td style="width: 40%;">
                        <div class="list-album-song">
                            <div class="list-album-song-img" style = "background-image: url(${song.image})"></div>
                            <div class="list-album-song-info"  >
                                <div class="list-album-song-info-name">${song.name}</div>
                                <div class="list-album-song-info-author">${song.singer}</div>
                            </div>
                        </div>
                    </td>
                    <td style="width: 50%;">${song.album}</td>
                    <td style="width: 5%;">4:15</td>
                </tr>
            `
        })
        $('.list-album table tbody').innerHTML = html.join('');
    },
    adjustVolumn: function() {
        $('.adjust-volumn-run').oninput = function() {
            $('.audio-music').volume = Number($('.adjust-volumn-run').value);
            console.log(Number($('.adjust-volumn-run').value));
        }
    },
    defineProperties: function(){
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        })
    },
    handleEvents: function(){
        const _this = this;
        // Handle when click play/pause audio
        playBtn.onclick = function() {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }

            // Khi audio chua play, co nghia la dang pause
            audio.onplay = function(){
                _this.isPlaying = true;
                playBtn.classList.add('playing');
            }

            // Khi audio dang chay ma muon pause
            audio.onpause = function() {
                _this.isPlaying = false;
                playBtn.classList.remove('playing');
            }

            // Khi tien do bai hat thay doi
            audio.ontimeupdate = function(){
                if (audio.duration) {
                    const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                    lineMusic.value = progressPercent;
                }
            }
        }
        // xu li khi tua

        lineMusic.onchange = function(e) {
            const seekTime = e.target.value * audio.duration / 100;
            audio.currentTime = seekTime;
        }

        // Khi next bai hat
        nextBtn.onclick = function(e){
            if (_this.isRandom) {
                _this.randomSong();
                audio.play();
            }
            else {
                _this.nextSong();
                audio.play();
            }

            // Khi audio chua play, co nghia la dang pause
            audio.onplay = function(){
                _this.isPlaying = true;
                playBtn.classList.add('playing');
            }

            // Khi audio dang chay ma muon pause
            audio.onpause = function() {
                _this.isPlaying = false;
                playBtn.classList.remove('playing');
            }
        }

        // khi audio prev
        prevBtn.onclick = function(e) {

            if (_this.isRandom) {
                _this.randomSong();
                audio.play();
            }
            else {
                _this.prevSong();
                audio.play();
            }

            audio.onplay = function(){
                _this.isPlaying = true;
                playBtn.classList.add('playing');
            }

            // Khi audio dang chay ma muon pause
            audio.onpause = function() {
                _this.isPlaying = false;
                playBtn.classList.remove('playing');
            }

            
            
        }
        //random song
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle('active', _this.isRandom);
            
        }

        //Xu li lap lai 1 bai hat
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat;
            repeatBtn.classList.toggle('active', _this.isRepeat);
            console.log(_this.isRepeat);
        }

        // when ended song
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play();
            }
            else {
                nextBtn.click();
            }
        }

        playlist.onclick = function(e) {
            const songNode = e.target.closest('.row-table:not(.active)');
            
            if (songNode) {
                _this.currentIndex = Number(songNode.getAttribute('data-index'));
                _this.loadCurrentSong();
                audio.play();

                audio.onplay = function(){
                    _this.isPlaying = true;
                    playBtn.classList.add('playing');
                }
    
                // Khi audio dang chay ma muon pause
                audio.onpause = function() {
                    _this.isPlaying = false;
                    playBtn.classList.remove('playing');
                }

                $('.row-table.active')?.classList.remove('active');
                songNode.classList.add('active');

                audio.ontimeupdate = function(){
                    if (audio.duration) {
                        const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                        lineMusic.value = progressPercent;
                    }
                }
                
                let innerSongNode = songNode.querySelector('td');
                let indexSong = Number(songNode.getAttribute('data-index')) + 1;
                let memIndexSong = $('.row-table .list-album-song-active-wrap')?.getAttribute('data-index2');
                
                
                if (memIndexSong) {
                    let numberMemIndexSong = Number(memIndexSong) - 1;
                    $(`.row-table[data-index = "${numberMemIndexSong}"] td`).innerHTML = `
                        <span>${memIndexSong}</span>
                    `;

                }

                memIndexSong = Number(songNode.getAttribute('data-index'));
                innerSongNode.innerHTML = `
                        <span>${indexSong}</span>
                        <div class = "list-album-song-active-wrap" data-index2 = "${indexSong}">
                            <div class = "equalizier">
                                <div class = "bar bar1"></div>
                                <div class = "bar bar2"></div>
                                <div class = "bar bar3"></div>
                                <div class = "bar bar4"></div>
                            </div>
                        </div>   
                `;

                handleAnimationSoundBar();
            }
        }


    },
    loadCurrentSong: function() {
        infoMusicImg.style.backgroundImage = `url(${this.currentSong.image})`;
        infoMusicName.textContent = this.currentSong.name;
        infoMusicAuthor.textContent = this.currentSong.singer;
        audio.src = this.currentSong.path;

    },
    nextSong: function() {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) this.currentIndex = 0; 
        this.loadCurrentSong();

        let nodeCurr = $(`.row-table[data-index = "${this.currentIndex}"]`);
        let innerNodeCurr = nodeCurr.querySelector('td');

        $('.row-table.active')?.classList.remove('active');
        nodeCurr.classList.add('active');
        
        let memIndexSong = $('.row-table .list-album-song-active-wrap')?.getAttribute('data-index2');

        let numberMemIndexSong = Number(memIndexSong) - 1;
        $(`.row-table[data-index = "${numberMemIndexSong}"] td`).innerHTML = `
                <span>${memIndexSong}</span>
            `;

        let indexSong = this.currentIndex + 1;
        innerNodeCurr.innerHTML = `
                <span>${indexSong}</span>
                <div class = "list-album-song-active-wrap" data-index2 = "${indexSong}">
                    <div class = "equalizier">
                        <div class = "bar bar1"></div>
                        <div class = "bar bar2"></div>
                        <div class = "bar bar3"></div>
                        <div class = "bar bar4"></div>
                    </div>
                </div>   
        `
        handleAnimationSoundBar();
    },
    prevSong: function() {
        this.currentIndex--;
        if (this.currentIndex < 0) this.currentIndex = this.songs.length - 1; 
        this.loadCurrentSong();

        let nodeCurr = $(`.row-table[data-index = "${this.currentIndex}"]`);
        let innerNodeCurr = nodeCurr.querySelector('td');

        $('.row-table.active')?.classList.remove('active');
        nodeCurr.classList.add('active');

        let memIndexSong = $('.row-table .list-album-song-active-wrap')?.getAttribute('data-index2');

        let numberMemIndexSong = Number(memIndexSong) - 1;
        $(`.row-table[data-index = "${numberMemIndexSong}"] td`).innerHTML = `
                <span>${memIndexSong}</span>
            `;

        let indexSong = this.currentIndex + 1;
        innerNodeCurr.innerHTML = `
                <span>${indexSong}</span>
                <div class = "list-album-song-active-wrap" data-index2 = "${indexSong}">
                    <div class = "equalizier">
                        <div class = "bar bar1"></div>
                        <div class = "bar bar2"></div>
                        <div class = "bar bar3"></div>
                        <div class = "bar bar4"></div>
                    </div>
                </div>   
        `
        handleAnimationSoundBar();


    },
    randomSong: function() {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * (this.songs.length));
        }
        while (randomNumber === this.currentIndex);

        this.currentIndex = randomNumber;
        this.loadCurrentSong();
    },
    start: function() {
        // Define attributes for objects
        this.defineProperties();

        // Listener and handle Events
        this.handleEvents();

        // Update information to interface when app run
        this.loadCurrentSong();
        // Render playlist music to browser
        this.render();

        this.adjustVolumn();


    }
}

app.start();

