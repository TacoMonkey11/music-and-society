<script>
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';

	const data = [
		{
			time: `1960s`,
			content: `Lo-Fi in the 1960s is completely different from what we know today. Most music described as Lo-Fi during this time just meets the current dictionary definition of Low Fidelity, that being just a low quality recording and instrumentation. One of those bands meeting the criteria were that Beach Boys. The Beach Boys would constantly innovate with new sounds that are very DIY. Much of their work is very similar to other bands of the era, this is a common theme among Lo-Fi due to it's `,
			image:
				'https://cdn.britannica.com/27/198727-050-DE491706/The-Beach-Boys-Al-Jardine-Carl-Wilson.jpg',
			video: 'https://www.youtube-nocookie.com/embed/u90beUXTKwo?controls=0&amp;start=65&amp;end=88'
		},
		{
			time: `1980s`,
			content: `Around this time, Lo-Fi itself was morphing and changing based on popular instruments. To capture this new era of music, Bill Berger would create a new radio show named "Low-Fi" (The "w" would soon be lost) on WFMU 91.1 FM, the ~30 minute show was a collection of listener submitted music which was entirely homemade. The first song in the attached video is quite close to what you would consider Lo-Fi today. That's only with the audio clip linked here, the full video can be found at in the media section of the nav bar. The rest of the songs are aren't as close to modern Lo-Fi, and are interesting to listen to.`,
			video: 'https://www.youtube-nocookie.com/embed/Cgh_siDjy0E?controls=0&amp;end=123',
			image: 'https://blogfiles.wfmu.org/IL/BergerImages/MaskBerger.jpg'
		},
		{
			time: `2000s`,
			content: `The turn of the century brought new technology, or to be a little more specific, it granted easy access to technology. The Lo-Fi genre exploded with music made with electronic instruments and samples. Around this time was when one of the most influential Lo-Fi songs would be produced for the 2006 anime: Samurai Champloo. Composed by the late Nujabes, it shook the entire Lo-Fi genre. What made Nujabes stand out from the crowd of Lo-Fi artists was his use of jazz chords. Along with other samples, Nujabes took new technology and utilized it in a way that no one had ever seen before.`,
			video: 'https://www.youtube-nocookie.com/embed/Eq6EYcpWB_c?controls=0&amp;end=88',
			image: 'https://i1.sndcdn.com/artworks-000038345409-0q8tnk-t500x500.jpg'
		},
		{
			time: `2010s`,
			content: `This is when the popularity of Lo-Fi really exploded. With the introduction of youtube livestreams, tons of channels started 24/7 radios on Youtube. Tons of new Lo-Fi channels appeared, including on of the most popular channels today: ChilledCow (Know known as Lofi Girl). These channels would advertise their content as beats to study to; in that regard, they weren't really wrong. Many people enjoy listening to Lo-Fi music whilst studying, and science agrees. Many people prefer to listen to slow, easily predictable music. These new channels quickly exploded with popularity and caused a tsunami of new channels to flood the platform, spreading the genre to even further audiences.`,
			video: 'https://www.youtube-nocookie.com/embed/5AXlo8MzqoM?controls=0',
			image:
				'https://lh3.googleusercontent.com/bzQGw1aGEkHb_cg09JtbnzTzhDdllGX4oEUhAEhaiBABz-h-pywkW4iLtwrmz4nZVt9-BsIIWzglQtBQPY0eTZvUy8rVMzfvh7f0HkNFZ-f173KsJQw=v0-s1050'
		}
	];
</script>

<h1 class="title">Lo-Fi!</h1>

<p class="intro-text">
	The Lo-Fi genre of music has exploded over the course of the pandemic. Thousands of people tune in
	to youtube live streams just to listen to Lo-Fi. But many don't know of Lo-Fi's humble beginnings
	and changing definitions.
</p>
<div class="livestream">
	<iframe
		width="784"
		height="441"
		src="https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?controls=0"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	/>
</div>
<p class="intro-text" style="margin-bottom: 10%">
	You may have come across this livestream before, arguably the most popular example of Lo-Fi
	available. This livestream in particular plays Lo-Fi Hip Hop, one of the more popular sub-genres
	of Lo-Fi, and what this display focuses more on.
</p>
<div id="about" style="margin-top: 100px">
	<h1 class="title">But wait... What exactly is Lo-Fi?</h1>
	<p class="intro-text">
		Lo-Fi is short form for Low Fidelity, which in itself is used to describe a low quality
		recording. That doesn't help much, as it's not really as simple as saying a recording is low
		quality or not, those definitions are relative. A cassette tape in the 80s wouldn't be
		considered low quality at the time, but it sure would be today. Traditional Lo-Fi has a little
		more going for it than just low quality though. There is usually a DIY and nostalgic feel to it,
		allowing the artist to go wild... But not too wild. Many Lo-Fi tunes have a rather slow pace to
		them, often being very repetitive and simple. That is Lo-Fi at it's core, but it has truly
		branched out to nearly every corner of the music industry.
	</p>
	<h1 class="title" style="margin: 100px">Is this the same music I use to study?</h1>
	<p class="intro-text">
		It's not specifically Lo-Fi music that people want to study to. Many people enjoy a slow
		instrumental tune in the background. Before Lo-Fi, certain classical music had taken the role as
		studying music, but Lo-Fi seems to fit the bill perfectly and has taken the top spot as study
		music. Studies were conducted on what was called the "Mozart Effect", it was a theory connecting
		listening to Mozart's music and scoring higher on an IQ test. In reality, it wasn't Mozart's
		music that made people smarter, the people just preferred that type of music since it made them
		happy. In another study, participants regarded that the slow tempo of the music they listened to
		helped them focus, along with it being instrumental. Though just because many enjoy this music
		to study with, it doesn't mean you have to love it. It all comes down to preference, it's not
		like Lo-Fi is magical and gives you special studying powers.
	</p>
</div>
<div id="timeline">
	<h1 class="title">Simple History</h1>
	<Timeline position="alternate">
		{#each data as item}
			<TimelineItem>
				<TimelineOppositeContent slot="opposite-content">
					<h1>{item.time}</h1>
					<img src={item.image} style="width: 500px; height: auto; margin-bottom: 50px" />
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					{#if Object.hasOwn(item, 'video')}
						<iframe
							width="560"
							height="315"
							src={item.video}
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						/>
					{/if}
					{#if data.indexOf(item) % 2 === 0}
						<h3 style="margin-right: 30%">{item.content}</h3>
					{/if}
					{#if data.indexOf(item) % 2 === 1}
						<h3 style="margin-left: 30%">{item.content}</h3>
					{/if}
				</TimelineContent>
			</TimelineItem>
		{/each}
	</Timeline>
</div>

<h1 class="title">But how does this all connect?</h1>
<p class="intro-text">
	Not one artist / group has fully shaped what Lo-Fi is today. Instead, Lo-Fi itself has had to
	morph and transform based on the popular music trends at the time. During the 60s, Lo-Fi was still
	dominated by rock, but has decades past, so did the popular music. People started to stray from
	the norm and Lo-Fi began to be a little more unique and homemade. Instead of being just a low
	quality version of the already super popular music, it became whatever the artist wanted it to be.
	Don't get me wrong, some of the music was still really low quality, take a look at the rest of the
	Bill Berger Lo-Fi show. Lo-Fi really takes a spin during the 2000s though, where electronic music
	is easily available for everyone to make, exploding the Lo-Fi genre with tons of new music, now
	featuring samples of other, more professional music. This can give the music a more professional
	sound while also keeping the barrier to entry fairly low.
</p>
<h1 class="title">What's next for Lo-Fi?</h1>
<p class="intro-text" style="margin-bottom: 50px">
	Who knows? Lo-Fi, more specifically Lo-Fi Hip Hop currently has a large presence on the internet,
	but has been slow to penetrate the billboard top 100. One song that got close was <i
		>Death Bed (Coffee for Your Head)</i
	> by Powfu. The song combined the aesthetic sound of Lo-Fi with more rap like lyrics and placed 43rd
	on the year-end top 100 billboard chart for 2020. I can see more Lo-Fi Hip Hop songs make it up there
	in the next few years. But just like the music genres changes from the 60s, they still have room to
	change now
</p>
<footer>Made By Spencer Al-Jbouri</footer>
