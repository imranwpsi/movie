<meta property="og:site_name" content="{{ settings('branding.site_name') }}" />
<meta property="twitter:card" content="summary" />
<title>
    {{ $title->name }} ({{ $title->year }}) - {{ $episode->name }} -
    {{ settings('branding.site_name') }}
</title>
<meta property="og:url" content="{{ urls()->episode($episode, $title) }}" />
<link rel="canonical" href="{{ urls()->episode($episode, $title) }}" />
<meta
    property="og:title"
    content="{{ $title->name }} ({{ $title->year }}) - {{ $episode->name }} -{{ settings('branding.site_name') }}"
/>

@if ($episode->poster)
    <meta property="og:image" content="{{ $episode->poster }}" />
    <meta property="og:width" content="300" />
    <meta property="og:height" content="450" />
@endif

<meta property="og:description" content="{{ $episode->description }}" />
<meta name="description" content="{{ $episode->description }}" />
<meta
    property="keywords"
    content="reviews,photos,user ratings,synopsis,trailers,credits"
/>

<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "TVEpisode",
        "@id": "{{ urls()->episode($episode, $title) }}",
        "url": "{{ urls()->episode($episode, $title) }}",
        "name": "{{ $episode->name }}",
        "image": "{{ $episode->poster }}",
        "timeRequired": "{{ $title->runtime }}",
        "contentRating": "{{ $title->certification }}",
        "description": "{{ $episode->description }}",
        "datePublished": "{{ $episode->release_date }}",
        "partOfSeason": {
            "@type": "TVSeason",
            "seasonNumber": "{{ $episode->season_number }}"
        },
        "genre": [
            @foreach ($title->genres as $genre)
                "{{ $genre->name }}",
            @endforeach
        ],
        "keyword": [
            @foreach ($title->keywords as $keyword)
                "{{ $keyword->name }}",
            @endforeach
        ],
        @if(isset($credits['actors']))
            "actor": [
                @foreach ($credits['actors']->slice(0, 10) as $actor)
                    {
                        "@type": "Person",
                        "name": "{{ $actor->name }}"
                        "url": "{{ urls()->person($actor) }}"
                    },
                @endforeach
            ],
        @endif
        @if(isset($credits['directing']))
            "director": [
                @foreach ($credits['directing'] as $director)
                    {
                        "@type": "Person",
                        "name": "{{ $director->name }}"
                         "url": "{{ urls()->person($director) }}"
                    },
                @endforeach
            ],
        @endif
        @if(isset($credits['creators']))
            "creator": [
                @foreach ($credits['creators'] as $creator)
                    {
                        "@type": "Person",
                        "name": "{{ $creator->name }}"
                         "url": "{{ urls()->person($creator) }}"
                    },
                @endforeach
            ],
        @endif
        @if($episode->rating)
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "{{ $episode->rating }}",
                "ratingCount": "{{ $episode->vote_count }}",
                "bestRating": "10",
                "worstRating": "1"
            }
        @endif
    }
</script>
