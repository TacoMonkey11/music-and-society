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
			content: `Lo-Fi in the 1960s is completely different from what we know today. Most music described as Lo-Fi during this time just meets the current dictionary definition of Low Fidelity, that being just a low quality recording and instrumentation. One of those bands meeting the criteria were that Beach Boys. The Beach Boys would constantly innovate with new sounds that are very DIY.`,
			image:
				'https://cdn.britannica.com/27/198727-050-DE491706/The-Beach-Boys-Al-Jardine-Carl-Wilson.jpg'
		},
		{
			time: `1980s`,
			content: `Around this time, Lo-Fi itself was morphing and changing based on popular instruments. To capture this new era of music, Bill Berger would create a new radio show named "Low-Fi" (The "w" would soon be lost) on WFMU 91.1 FM, the ~30 minute show was a collection of listener submitted music which was entirely homemade. The first song in the attached video is quite close to what you would consider Lo-Fi today. `,
			video: 'https://www.youtube.com/embed/Cgh_siDjy0E',
			image: 'https://blogfiles.wfmu.org/IL/BergerImages/MaskBerger.jpg'
		},
		{
			time: `2000s`,
			content: `The turn of the century brought new technology, or to be a little more specific, it granted easy access to technology. The Lo-Fi genre exploded with music made with electronic instruments and samples. Around this time was when one of the most influential Lo-Fi songs would be produced for the 2006 anime: Samurai Champloo. Composed by the late Nujabes, it shook the entire Lo-Fi genre.`,
			video: 'https://www.youtube.com/embed/Eq6EYcpWB_c',
			image: 'https://i1.sndcdn.com/artworks-000038345409-0q8tnk-t500x500.jpg'
		},
		{
			time: `2010s`,
			content: `This is when the popularity of Lo-Fi really exploded. With the introduction of youtube livestreams, tons of channels started 24/7 radios on Youtube. Tons of new Lo-Fi channels appeared, including on of the most popular channels today: ChilledCow (Know known as Lofi Girl). These channels would advertise their content as beats to study to; in that regard, they weren't really wrong. Many people enjoy listening to Lo-Fi music whilst studying, and science agrees.`
		},
		{ time: `2020s`, content: `Lo-Fi in the 2020s` }
	];
</script>

<h1 class="title">Lo-Fi!</h1>

<p class="intro-text">
	The Lo-Fi genre of music has exploaded over the course of the pandemic. Thousands of people tune
	in to youtube live streams just to listen to Lo-Fi. But many don't know of Lo-Fi's humble
	beginnings and changing definitions
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
<div id="timeline">
	<h1 class="title">Simple History</h1>
	<Timeline position="alternate">
		{#each data as item}
			<TimelineItem>
				<TimelineOppositeContent slot="opposite-content">
					<h1>{item.time}</h1>
					<img src={item.image} style="width: 500px; height: auto; margin-bottom: 200px" />
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
						<h3 style="margin-right: 40%">{item.content}</h3>
					{/if}
					{#if data.indexOf(item) % 2 === 1}
						<h3 style="margin-left: 40%">{item.content}</h3>
					{/if}
				</TimelineContent>
			</TimelineItem>
		{/each}
	</Timeline>
</div>
<footer>Made By Spencer Al-Jbouri</footer>
