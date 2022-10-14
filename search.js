<script>
jQuery(function($) {
    $('#filtertext').keyup(function(event) {
        var val = $(this).val();
        if (val == "") {
            $('.ul li').show();
        } else {
            $('.ul li').hide();
            $(".ul li:contains('"+val+"')").show();
        }
    });
});
</script>
