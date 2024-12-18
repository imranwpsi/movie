<meta property="og:site_name" content="{{ settings('branding.site_name') }}" />
<meta property="twitter:card" content="summary" />
<meta property="og:type" content="profile" />
<title>{{ $person->name }} - {{ settings('branding.site_name') }}</title>
<meta property="og:url" content="{{ urls()->person($person) }}" />
<link rel="canonical" href="{{ urls()->person($person) }}" />
<meta
    property="og:title"
    content="{{ $person->name }} - {{ settings('branding.site_name') }}"
/>

@if ($person->poster)
    <meta property="og:image" content="{{ $person->poster }}" />
    <meta property="og:width" content="300" />
    <meta property="og:height" content="450" />
@endif

<meta property="og:description" content="{{ $person->description }}" />
<meta name="description" content="{{ $person->description }}" />
<meta property="keywords" content="biography, facts, photos, credits" />

<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "Person",
        "@id": "{{ urls()->person($person) }}",
        "url": "{{ urls()->person($person) }}",
        "name": "{{ $person->name }}",
        "image": "{{ $person->poster }}",
        "description": "{{ $person->description }}",
        "jobTitle": "{{ $person->known_for }}",
        "birthDate": "{{ $person->birth_date }}",
        "birthPlace": "{{ $person->birth_place }}",
    }
</script>
