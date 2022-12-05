window.addEventListener("load", ()=> {
    /**
     * Para recorrer el arreglo con la lista de canciones
     */
    let index = 0;
    let reproductor = () => {
    
        /**
         * Lista con el nombre del archivo y cancion + src de una imagen
         */
        let lista_musica = [
            ["Die anywhere else", "https://i.ytimg.com/vi/tvPOTj6t7JQ/maxresdefault.jpg"],
            ["cash-cash-overtime", "https://th.bing.com/th/id/R.c8e1103d3f98418cb61738c25a2c3df4?rik=8r4tYaRCDdu%2bxg&riu=http%3a%2f%2fwww.thissongslaps.com%2fwp-content%2fuploads%2f2013%2f10%2fovertime.jpg&ehk=MZNiL6wkzeSW%2bV0K4BDJx%2btW%2bHph%2bsq4%2f4cKMQjywZo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"],
            ["No se habla de Bruno", "https://img.europapress.es/fotoweb/fotonoticia_20220208191736_640.jpg"],
            ["txt-loerloer-official-mv", "https://assets.nacionrex.com/__export/1591028324277/sites/debate/img/2020/06/01/102f8d272c388fbb69d682f027552e86_crop1591025803466.jpg_1834093470.jpg"],
            ["Without you -", "https://th.bing.com/th/id/R.915591b794fa7b04d43a283b4b9d593a?rik=C01ry4N%2bSoFJRQ&riu=http%3a%2f%2fmusicweeklynews.com%2fwp-content%2fuploads%2f2017%2f08%2favicii-without-you-ft-sandro-cavazza-lyric-video.jpg&ehk=t3TErmv0GuTvp7S%2fmb4TfjEo7FExoX9KQ%2bJIqOxPiks%3d&risl=&pid=ImgRaw&r=0"]
        ];

        /**
         * Accede al reproductor por defecto(con la primera cancion) en el html.
         * Mas reproductores se agregaran si se hace click en "<" o ">"
         */
        let musica = document.getElementById(`${lista_musica[index][0]}`);
        musica.volume = 0.1;
    
        // seleccion de los botones del reproductor
        let play = document.getElementById("play");
        let botones = document.querySelector(".reproductor__controles");
    
    
        botones.addEventListener("click", (elem) => {
            let elemento = elem.target;
            if(elemento.matches(".fa-play-circle")){
                play.classList.remove("fa-play-circle");
                play.classList.add("fa-pause-circle");
                musica.volume = 0.1;
                musica.play();
    
            }else if(elemento.matches(".fa-pause-circle")){
                play.classList.remove("fa-pause-circle");
                play.classList.add("fa-play-circle");
                
                musica.pause();
            }else if(elemento.matches(".fa-angle-right")){
                play.classList.remove("fa-play-circle");
                play.classList.add("fa-pause-circle");
    
                index ++;
                if(index == lista_musica.length){
                    index = 0;
                }
                musica.pause();
    
                // se agrega un nuevo reproductor
               let box = document.querySelector(".reproductor");
               box.innerHTML += `
                   <audio class="audio" controls id="${lista_musica[index][0]}">
                       <source src="assets/music/${lista_musica[index][0]}.mp3" type="audio/mp3">
                   </audio>
               `;
                
                //se cambia la imagen y el titulo de la musica
                document.getElementById("musica_img").src = lista_musica[index][1];
                document.getElementById("music_name").innerHTML = lista_musica[index][0];

                // se cambia la variabale musica por el muevo reproductor (nueva musica)
                musica = document.getElementById(`${lista_musica[index][0]}`);
                musica.volume = 0.1;
                musica.play();
    
                reproductor();
    
            }else if(elemento.matches(".fa-angle-left")){
                play.classList.remove("fa-play-circle");
                play.classList.add("fa-pause-circle");
                index --;
                if(index == -1){
                    index = lista_musica.length - 1;
                }
                musica.pause();
    
                let box = document.querySelector(".reproductor");
               box.innerHTML += `
                   <audio class="audio" controls id="${lista_musica[index][0]}">
                       <source src="assets/music/${lista_musica[index][0]}.mp3" type="audio/mp3">
                   </audio>
               `;

                document.getElementById("musica_img").src = lista_musica[index][1];
                document.getElementById("music_name").innerHTML = lista_musica[index][0];
    
                musica = document.getElementById(`${lista_musica[index][0]}`);
                musica.volume = 0.1;
                musica.play();
    
                reproductor();
            }
        });
    }
    
    reproductor();
    
    // SOUNDCLOUD
    let azar = document.getElementById("dado1");
    
    azar.addEventListener("click", () => {
        let lista = [
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1119491251&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/hip321gg" title="Chip" target="_blank" style="color: #cccccc; text-decoration: none;">Chip</a> · <a href="https://soundcloud.com/hip321gg/i-really-want-you-vip" title="I Really Want You VIP" target="_blank" style="color: #cccccc; text-decoration: none;">I Really Want You VIP</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1061154850&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/melodyline14" title="YonKaGor" target="_blank" style="color: #cccccc; text-decoration: none;">YonKaGor</a> · <a href="https://soundcloud.com/melodyline14/youll-be-gone" title="You&#x27;ll Be Gone" target="_blank" style="color: #cccccc; text-decoration: none;">You&#x27;ll Be Gone</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1097941309&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/vgmr495" title="Vgmr495" target="_blank" style="color: #cccccc; text-decoration: none;">Vgmr495</a> · <a href="https://soundcloud.com/vgmr495/heartbass-friday-night-funkin" title="Heartbass - Friday Night Funkin&#x27; [The Date Week] || Metal Cover by LongestSoloEver" target="_blank" style="color: #cccccc; text-decoration: none;">Heartbass - Friday Night Funkin&#x27; [The Date Week] || Metal Cover by LongestSoloEver</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/903711172&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/judgesteadguitar" title="JudgesteadGuitar" target="_blank" style="color: #cccccc; text-decoration: none;">JudgesteadGuitar</a> · <a href="https://soundcloud.com/judgesteadguitar/die-anywhere-else-pop-punk-cover-from-night-in-the-woods" title="Die Anywhere Else - Pop Punk Cover (From &quot;Night in the Woods&quot;)" target="_blank" style="color: #cccccc; text-decoration: none;">Die Anywhere Else - Pop Punk Cover (From &quot;Night in the Woods&quot;)</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/467629578&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/melodyline14" title="YonKaGor" target="_blank" style="color: #cccccc; text-decoration: none;">YonKaGor</a> · <a href="https://soundcloud.com/melodyline14/another-mistake" title="Another Mistake" target="_blank" style="color: #cccccc; text-decoration: none;">Another Mistake</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/607176195&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/melodyline14" title="YonKaGor" target="_blank" style="color: #cccccc; text-decoration: none;">YonKaGor</a> · <a href="https://soundcloud.com/melodyline14/i-forgot-that-you-exist" title="I Forgot That You Exist" target="_blank" style="color: #cccccc; text-decoration: none;">I Forgot That You Exist</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/162971007&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/addal" title="ADDAL" target="_blank" style="color: #cccccc; text-decoration: none;">ADDAL</a> · <a href="https://soundcloud.com/addal/sia-chandelier-addal-edit-free" title="Sia - Chandelier (Addal Edit)" target="_blank" style="color: #cccccc; text-decoration: none;">Sia - Chandelier (Addal Edit)</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1026176287&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/jez-156093932" title="Jez" target="_blank" style="color: #cccccc; text-decoration: none;">Jez</a> · <a href="https://soundcloud.com/jez-156093932/alien-victory-starcadian-guitar-electric-part-cut-edit" title="Alien Victory -  Starcadian - Electric Guitar Part (Cut Edit)" target="_blank" style="color: #cccccc; text-decoration: none;">Alien Victory -  Starcadian - Electric Guitar Part (Cut Edit)</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/955841107&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/hip321gg" title="Chip" target="_blank" style="color: #cccccc; text-decoration: none;">Chip</a> · <a href="https://soundcloud.com/hip321gg/raining-tacos-verplex-remix" title="Raining Tacos (Verplex Remix)" target="_blank" style="color: #cccccc; text-decoration: none;">Raining Tacos (Verplex Remix)</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/328315381&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/cyberhound-official" title="Cyberhound Official" target="_blank" style="color: #cccccc; text-decoration: none;">Cyberhound Official</a> · <a href="https://soundcloud.com/cyberhound-official/when-you-see-my-friends-mayday-parade-cover" title="When You See My Friends (Mayday Parade Cover)" target="_blank" style="color: #cccccc; text-decoration: none;">When You See My Friends (Mayday Parade Cover)</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314416557&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/junior-dominguez-249279783" title="BloodyShadow45 (ShadowFoxy45 4)" target="_blank" style="color: #cccccc; text-decoration: none;">BloodyShadow45 (ShadowFoxy45 4)</a> · <a href="https://soundcloud.com/junior-dominguez-249279783/die-anywhere-else-night-in-the-woods-rock-cover-by-mandopony" title="Die Anywhere Else Night In The Woods Rock Cover By MandoPony" target="_blank" style="color: #cccccc; text-decoration: none;">Die Anywhere Else Night In The Woods Rock Cover By MandoPony</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/604351029&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/megawolf77" title="megawolf77" target="_blank" style="color: #cccccc; text-decoration: none;">megawolf77</a> · <a href="https://soundcloud.com/megawolf77/pastel-bayside-freeway" title="Pastel Bayside Freeway" target="_blank" style="color: #cccccc; text-decoration: none;">Pastel Bayside Freeway</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/260648894&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/daltaidan" title="Daltaidan" target="_blank" style="color: #cccccc; text-decoration: none;">Daltaidan</a> · <a href="https://soundcloud.com/daltaidan/swinging-the-night-away" title="Swinging the Night Away" target="_blank" style="color: #cccccc; text-decoration: none;">Swinging the Night Away</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/374501210&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/mrkooltrix" title="MrKoolTrix" target="_blank" style="color: #cccccc; text-decoration: none;">MrKoolTrix</a> · <a href="https://soundcloud.com/mrkooltrix/rockin-that-bass" title="Rockin&#x27; That Bass" target="_blank" style="color: #cccccc; text-decoration: none;">Rockin&#x27; That Bass</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/125009446&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/niicmusic" title="NIIC" target="_blank" style="color: #cccccc; text-decoration: none;">NIIC</a> · <a href="https://soundcloud.com/niicmusic/all-i-want-for-christmas-is-a" title="All I Want For Christmas Is A Boy" target="_blank" style="color: #cccccc; text-decoration: none;">All I Want For Christmas Is A Boy</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/283276172&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/thatdancingdog" title="thatdancingdog" target="_blank" style="color: #cccccc; text-decoration: none;">thatdancingdog</a> · <a href="https://soundcloud.com/thatdancingdog/honey-im-good" title="Honey I&#x27;m Good" target="_blank" style="color: #cccccc; text-decoration: none;">Honey I&#x27;m Good</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/176526205&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/niicmusic" title="NIIC" target="_blank" style="color: #cccccc; text-decoration: none;">NIIC</a> · <a href="https://soundcloud.com/niicmusic/instinct-03-its-how-we-do" title="Instinct - 03. It&#x27;s How We Do" target="_blank" style="color: #cccccc; text-decoration: none;">Instinct - 03. It&#x27;s How We Do</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/176526474&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/niicmusic" title="NIIC" target="_blank" style="color: #cccccc; text-decoration: none;">NIIC</a> · <a href="https://soundcloud.com/niicmusic/instinct-02-instinct" title="Instinct - 02. Instinct" target="_blank" style="color: #cccccc; text-decoration: none;">Instinct - 02. Instinct</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/669428705&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/hip321gg" title="Chip" target="_blank" style="color: #cccccc; text-decoration: none;">Chip</a> · <a href="https://soundcloud.com/hip321gg/chipflake-theme-verplex-remix" title="Chipflake Theme (Verplex Remix)" target="_blank" style="color: #cccccc; text-decoration: none;">Chipflake Theme (Verplex Remix)</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/888146320&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/hip321gg" title="Chip" target="_blank" style="color: #cccccc; text-decoration: none;">Chip</a> · <a href="https://soundcloud.com/hip321gg/bacon" title="Bacon" target="_blank" style="color: #cccccc; text-decoration: none;">Bacon</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/936253237&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/hip321gg" title="Chip" target="_blank" style="color: #cccccc; text-decoration: none;">Chip</a> · <a href="https://soundcloud.com/hip321gg/furryfoofi" title="FurryFoofi" target="_blank" style="color: #cccccc; text-decoration: none;">FurryFoofi</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/907588324&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/soaverecords" title="Soave" target="_blank" style="color: #cccccc; text-decoration: none;">Soave</a> · <a href="https://soundcloud.com/soaverecords/braaten-robin-tinholt-save-the-world" title="Braaten &amp; Robin Tinholt - Save The World" target="_blank" style="color: #cccccc; text-decoration: none;">Braaten &amp; Robin Tinholt - Save The World</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/194510401&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/deependmusic" title="Deepend" target="_blank" style="color: #cccccc; text-decoration: none;">Deepend</a> · <a href="https://soundcloud.com/deependmusic/matt-simons-catch-release-deepend-remix-out-now" title="Matt Simons - Catch &amp; Release (Deepend Remix) - [OUT NOW!!]" target="_blank" style="color: #cccccc; text-decoration: none;">Matt Simons - Catch &amp; Release (Deepend Remix) - [OUT NOW!!]</a></div>',
            '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/784907248&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/mugatunes-vip" title="MugaTunes Releases" target="_blank" style="color: #cccccc; text-decoration: none;">MugaTunes Releases</a> · <a href="https://soundcloud.com/mugatunes-vip/the-chainsmokers-illenium-takeaway-ft-lennon-stella-brett-butter-remix" title="The Chainsmokers, ILLENIUM - Takeaway Ft Lennon Stella (Brett &amp; Butter Remix)" target="_blank" style="color: #cccccc; text-decoration: none;">The Chainsmokers, ILLENIUM - Takeaway Ft Lennon Stella (Brett &amp; Butter Remix)</a></div>'
        ];
    
        let index = parseInt(Math.random() * (lista.length))
    
        let new_muscia = lista[index];
        let box = document.getElementById("soundcloud_rep");
    
        box.innerHTML = `
            ${new_muscia}
        `;
    });
    
    /*======================
    -----------
    YOUTUBE
    -----------
    ======================*/
    
    
    let channel_details_url = "https://www.googleapis.com/youtube/v3/channels?id=UCe26qgHA7QU0rvHjjHH-6yw&key=AIzaSyBXZZCJ8Uo25Raihi2QJQTmdY1bWAjbOEw&part=id,snippet,contentDetails,statistics,topicDetails";
    let vid_list_url = "https://www.googleapis.com/youtube/v3/search?channelId=UCe26qgHA7QU0rvHjjHH-6yw&key=AIzaSyBXZZCJ8Uo25Raihi2QJQTmdY1bWAjbOEw&part=id,snippet&maxResults=50";
    let vid_details_url = "https://www.googleapis.com/youtube/v3/videos?id=wpB8uWVXoQg&key=AIzaSyBXZZCJ8Uo25Raihi2QJQTmdY1bWAjbOEw&part=snippet,contentDetails,statistics,status"
    
    let module = (async() => {
        // estadisticas del canal
        let request = await fetch(channel_details_url);
        let respuesta = await request.json();

        console.log(respuesta)
        
        let suscriptores = respuesta.items[0].statistics.subscriberCount;
        let videos = respuesta.items[0].statistics.videoCount;
        let visualizaciones = respuesta.items[0].statistics.viewCount;
        
        let box = document.getElementById("YT_stats");
        box.innerHTML = `
            <br>
            Cantidad de Suscriptores: <b><u>${suscriptores}</u></b><br>
            Cantidad de videos: <b><u>${videos}</u></b><br>
            Visualizaciones totales: <b><u>${visualizaciones}</u></b>
        `;
    
        // lista de videos
        let request2 = await fetch(vid_list_url);
        let respuesta2 = await request2.json();
    
        let lista_vid = [];
    
        let lista_busqueda = respuesta2.items;
        lista_busqueda.forEach(element => {
            let vid_id = element.id.videoId;
            let titulo = element.snippet.title
            if(vid_id != undefined){
                lista_vid.push(vid_id);
            }
        });
    
        //console.log(lista_vid)
    
        let dado2 = document.getElementById("dado2");
        dado2.addEventListener("click", () => {
    
            let index = parseInt(Math.random() * (lista_vid.length))
    
            let vid_id = lista_vid[index];
    
            let iframe = `<iframe id="youtube_vid" src="https://www.youtube.com/embed/${vid_id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            
            let box = document.getElementById("vid_box");
    
            box.innerHTML = `
                ${iframe}
            `;
        });
    
    })();
    
    /*======================
    -----------
    STEAM
    -----------
    ======================*/
    
    // https://developer.valvesoftware.com/wiki/Steam_Web_API#Game_interfaces_and_methods
    
    let resumen_jugador = "https://cors-proxy.htmldriven.com/?url=https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=7823223CAD5CD4EB1F21E8E4A8069BAB&steamids=76561199041830855"
    let ultimos_juegos = "https://cors-proxy.htmldriven.com/?url=https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=7823223CAD5CD4EB1F21E8E4A8069BAB&steamid=76561199041830855&format=json";
    
    let module_steam = (async() => {
        let request = await fetch(resumen_jugador);
        let respuesta = await request.json();
    
        let username = respuesta.response.players[0].personaname;
        let src_img = respuesta.response.players[0].avatarfull;
        let link = respuesta.response.players[0].profileurl;
    
        let img_av = document.querySelector(".steam .mitad .profile img");
        let text_profile = document.querySelector(".steam .mitad .profile p");
        img_av.src = src_img;
        text_profile.innerHTML = `
            Nombre: ${username}<br>
        `;
    
        // ultimos juegos jugados
        let request2 = await fetch(ultimos_juegos);
        let respuesta2 = await request2.json();
    
        console.log(respuesta2.response.games);
    
        let ultimos_juegos_list = respuesta2.response.games;
        let juegos_data = []
        ultimos_juegos_list.forEach((juego, index) => {
            juegos_data.push([
                juego.name,
                juego.appid,
                juego.playtime_forever,
                juego.playtime_2weeks
            ]);
        });
    
        juegos_data.forEach((juegos) => {
            const nombre = 0;
            const id = 1;
            const tiempo = 2;
            const tiempo_2semanas = 3;
            
            let tiempoHora = (juegos[tiempo] / 60).toFixed(1);
            let tiempoHoraSemana = (juegos[tiempo_2semanas] / 60).toFixed(1);
    
            let img_src = `https://cdn.cloudflare.steamstatic.com/steam/apps/${juegos[id]}/header.jpg`;
    
            let box = document.querySelector(".steam__stats");
    
            box.innerHTML += `
                <div class="card_steam">
                    <div>
                        <img src="${img_src}" alt="${juegos[nombre]}">
                    </div>
    
                    <div>
                        <h4 class="subtitulo">${juegos[nombre]}</h4>
                    </div>
    
                    <div>
                        <p>Horas jugadas totales: ${tiempoHora}Hrs</p>
                        <p>Horas jugadas las ultimas 2 semanas: ${tiempoHoraSemana}Hrs</p>
                    </div>
                </div>
            `;
        })
    
        // console.log(juegos_data)
    })();
    
    /*======================
    -----------
    AMIGOS
    -----------
    ======================*/
    
    let module_amigos = (() => {
        let data_amigos = [
            {
                nombre: "💙Wolf Angel💙",
                img_src: "assets/img/am_angel.webp",
                descripcion: "Bueno el no es solo mi amigo, es mi pareja, mi persona favorita, el dueño de mi corazon, cola y todo  >/w/< <br>Es un chico muy dulce, amable, guapo, lindo y de todo lo bueno que hay en este mundo<br>Amo jugar con el jeje x//3💞"
            },
            {
                nombre: "Loffy",
                img_src: "assets/img/am_loffy.webp",
                descripcion: "Mi hermanito querido y travieso jeje >w<. Solemos jugar animal royale y hablar de TODO."
            },
            {
                nombre: "Emisito-kun",
                img_src: "assets/img/am_emi.webp",
                descripcion: "Un gran amigo. Nos apoyamos mucho en nuestros problemas. Aunque tambien es muy travieso >:3"
            },
            {
                nombre: "Zafine (Caisus)",
                img_src: "assets/img/am_caisus.webp",
                descripcion: "Un chico muy amable y de confianza."
            },
            {
                nombre: "Gooldmoon",
                img_src: "assets/img/am_goldi.webp",
                descripcion: "Tambien llamado osito-sensei, es un gran amigo de confianza al que siempre le pido consejos. Un oso muy sabio :3"
            },
            {
                nombre: "Soxi",
                img_src: "assets/img/am_soxi.webp",
                descripcion: "Un Cheetah de lo mas cool, un gran amigo de confianza, mi mejor amigo <3"
            },
            {
                nombre: "Lalonganiza",
                img_src: "assets/img/am_lalo.webp",
                descripcion: "Tambien llamado lalo, es mi maestro, un chico mamado que me dio la bendicion del awa para ganar musculo y subir de peso."
            },
            {
                nombre: "r3mv",
                img_src: "assets/img/am_r3mv.webp",
                descripcion: "Gracias a el subi de nivel en steam xD, es un gran amigo y muy amable, siempre me la paso bien con el apesar de que hablamos poco. <br> Si no fuera por el, yo estaria perdido en este mundo cruel y pervertido x/D"
            },
            {
                nombre: "Ness",
                img_src: "assets/img/am_ness.webp",
                descripcion: "Un chico muy inteligente, amable y cariñoso, jugamos ajedrez y ablamos de dibujo."
            }
        ];
    
        let box = document.querySelector(".amigos__lista");
    
        data_amigos.forEach((amigo) => {
            box.innerHTML += `
                <div>
                    <img src="${amigo.img_src}" alt="${amigo.nombre}" data-descripcion="${amigo.descripcion}">
                </div>
            `;
        });
    
        box.addEventListener("click", (elem) => {
            let elemento = elem.target;
            if(elemento.matches("img")){
                let box_descripcion = document.querySelector(".amigos__descripcion");
    
                let descripcion = elemento.getAttribute("data-descripcion")
    
                box_descripcion.innerHTML = `
                <div>
                    <div>
                        <img src="${elemento.src}" alt="${elemento.alt}">
                    </div>
    
                    <div>
                        <h4 class="subtitulo">${elemento.alt}</h4>
                    </div>
    
                    <div>
                        <p>${descripcion}</p>
                    </div>
                </div>
                `;
            };
        });
    })();

    /*======================
    -----------
    GALERIA
    -----------
    ======================*/

    let modulo_galeria = () => {
        const grid = new Muuri('.grid', {
            layout: {
                rounding: false,
            }
        });
        
        grid.refreshItems();
        grid.refreshItems().layout();
    
        document.getElementById('grid').classList.add('imagenes-cargadas');
    
    
        // Agregamos los listener de los enlaces para filtrar por categoria.
        const enlaces = document.querySelectorAll('#categorias a');
        enlaces.forEach((elemento) => {
            elemento.addEventListener('click', (evento) => {
                // primero remover la clase "activo" de todos los enlaces
                evento.preventDefault();
                enlaces.forEach((enlace) => enlace.classList.remove('activo'));
                // Luego agregar la clase "activo", cuando se haga click
                evento.target.classList.add('activo');
    
                // obterer la categoria clickeada para el filtrado
                const categoria = evento.target.innerHTML.toLowerCase();
                // utilizar el metodo de mmauui: grid.filter
                // https://github.com/haltu/muuri#grid-method-filter
    
                // si categoria == todos: muestra todos (porque todos tienen el atributo data-categoria)
                // si categoria != todos: filtra la categoria clickeada
                categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
            });
        });
    
        // Agregamos el listener para la barra de busqueda
        document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
            // obtener el input y ponerlo en una variable
            const busqueda = evento.target.value.toLowerCase();
            // filtrar por elemento escrito (input)
            grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
        });
    
        // Agregamos listener para las imagenes
        const overlay = document.getElementById('overlay');
        document.querySelectorAll('.grid .item img').forEach((elemento) => {
            elemento.addEventListener('click', () => {
                const ruta = elemento.getAttribute('src');
                const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
    
                overlay.classList.add('activo');
                document.querySelector('#overlay img').src = ruta;
                document.querySelector('#overlay .descripcion').innerHTML = descripcion;
            });
        });
    
        // Eventlistener del boton de cerrar
        document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
            overlay.classList.remove('activo');
        });
    
        // Eventlistener del overlay
        overlay.addEventListener('click', (evento) => {
            evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
        });
    };
    
    modulo_galeria();
});



