var chatApiSessionRecognizeDirectives = function (msg) {
    var attachmentRegex = new RegExp('\\/attachment(\\s*:\\s*|\\s+)(http[^\\s^,]+)(\\s*,\\s*(audio|video|image))?', 'mi');

    var text = msg.msg_text || msg.msg;
    var match = text.match(attachmentRegex);

    if (match) {
        var fileUrl = match[2];
        var fileUrlPaths = fileUrl.split('/');
        var fileName = fileUrlPaths[fileUrlPaths.length - 1];
        return {
            event: commonConstants.events.chat.session.FILE,
            fileUrl: fileUrl,
            file_type: match[4] || 'attachment',
            file_name: fileName,
            msg_id: msg.msg_id,
            party_id: msg.party_id,
            timestamp: msg.timestamp,
        };
    }
};
