const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');
const Icon = require('stremio-icons/dom');
const { Button } = require('stremio/common');
const MetaPreviewButton = require('./MetaPreviewButton');
const MuteButton = require('./MuteButton');
const PlayPauseButton = require('./PlayPauseButton');
const SeekBar = require('./SeekBar');
const SubtitlesButton = require('./SubtitlesButton');
const VolumeSlider = require('./VolumeSlider');
const styles = require('./styles');

const ControlBar = ({
    className,
    paused,
    time,
    duration,
    volume,
    muted,
    subtitlesTracks,
    metaResource,
    onPlayRequested,
    onPauseRequested,
    onMuteRequested,
    onUnmuteRequested,
    onVolumeChangeRequested,
    onSeekRequested,
    onToggleSubtitlesPicker,
    onToggleMetaPreview,
    ...props
}) => {
    return (
        <div {...props} className={classnames(className, styles['control-bar-container'])}>
            <SeekBar
                className={styles['seek-bar']}
                time={time}
                duration={duration}
                onSeekRequested={onSeekRequested}
            />
            <div className={styles['control-bar-buttons-container']}>
                <PlayPauseButton
                    className={styles['control-bar-button']}
                    paused={paused}
                    onPlayRequested={onPlayRequested}
                    onPauseRequested={onPauseRequested}
                />
                <MuteButton
                    className={styles['control-bar-button']}
                    volume={volume}
                    muted={muted}
                    onMuteRequested={onMuteRequested}
                    onUnmuteRequested={onUnmuteRequested}
                />
                <VolumeSlider
                    className={styles['volume-slider']}
                    volume={volume}
                    onVolumeChangeRequested={onVolumeChangeRequested}
                />
                <div className={styles['spacing']} />
                <Button className={classnames(styles['control-bar-button'], 'disabled')} tabIndex={-1}>
                    <Icon className={'icon'} icon={'ic_network'} />
                </Button>
                <MetaPreviewButton
                    className={styles['control-bar-button']}
                    metaResource={metaResource}
                    onToggleMetaPreview={onToggleMetaPreview}
                />
                <Button className={classnames(styles['control-bar-button'], 'disabled')} tabIndex={-1}>
                    <Icon className={'icon'} icon={'ic_cast'} />
                </Button>
                <SubtitlesButton
                    className={styles['control-bar-button']}
                    subtitlesTracks={subtitlesTracks}
                    onToggleSubtitlesPicker={onToggleSubtitlesPicker}
                />
                <Button className={classnames(styles['control-bar-button'], 'disabled')} tabIndex={-1}>
                    <Icon className={'icon'} icon={'ic_videos'} />
                </Button>
            </div>
        </div>
    );
};

ControlBar.propTypes = {
    className: PropTypes.string,
    paused: PropTypes.any,
    time: PropTypes.any,
    duration: PropTypes.any,
    volume: PropTypes.any,
    muted: PropTypes.any,
    subtitlesTracks: PropTypes.any,
    metaResource: PropTypes.any,
    onPlayRequested: PropTypes.any,
    onPauseRequested: PropTypes.any,
    onMuteRequested: PropTypes.any,
    onUnmuteRequested: PropTypes.any,
    onVolumeChangeRequested: PropTypes.any,
    onSeekRequested: PropTypes.any,
    onToggleSubtitlesPicker: PropTypes.any,
    onToggleMetaPreview: PropTypes.any
};

module.exports = ControlBar;
